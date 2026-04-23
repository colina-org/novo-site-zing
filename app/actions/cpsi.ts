"use server";

import nodemailer from "nodemailer";

export type CpsiFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export type CpsiPayload = {
  nome: string;
  instituicao: string;
  email: string;
  telefone: string;
  newsletter: boolean;
  quiz: { question: string; answer: string }[];
};

export async function enviarCpsi(
  payload: CpsiPayload,
): Promise<CpsiFormState> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM ?? user;
  const to = process.env.CONTATO_TO;

  if (!host || !user || !pass || !to) {
    return {
      status: "error",
      message:
        "Configuração de e-mail ausente. Contate o administrador do site.",
    };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const quizHtml = payload.quiz
    .map(
      (q, i) => `
      <tr>
        <td style="padding: 6px 12px; font-weight: bold; vertical-align: top;">Pergunta ${i + 1}:</td>
        <td style="padding: 6px 12px;">${q.question}<br/><strong style="color:#0071E3;">${q.answer}</strong></td>
      </tr>`,
    )
    .join("");

  const html = `
    <h2 style="font-family: sans-serif; color: #0071E3;">Novo lead CPSI pelo site Zing</h2>
    <table style="font-family: sans-serif; font-size: 14px; border-collapse: collapse; margin-bottom: 16px;">
      <tr><td style="padding: 6px 12px; font-weight: bold;">Nome:</td><td style="padding: 6px 12px;">${payload.nome}</td></tr>
      <tr><td style="padding: 6px 12px; font-weight: bold;">Instituição:</td><td style="padding: 6px 12px;">${payload.instituicao}</td></tr>
      <tr><td style="padding: 6px 12px; font-weight: bold;">E-mail:</td><td style="padding: 6px 12px;">${payload.email}</td></tr>
      <tr><td style="padding: 6px 12px; font-weight: bold;">Telefone:</td><td style="padding: 6px 12px;">${payload.telefone}</td></tr>
      <tr><td style="padding: 6px 12px; font-weight: bold;">Quer receber materiais CPSI:</td><td style="padding: 6px 12px;">${payload.newsletter ? "Sim" : "Não"}</td></tr>
    </table>
    <h3 style="font-family: sans-serif; color: #464646;">Respostas do quiz</h3>
    <table style="font-family: sans-serif; font-size: 14px; border-collapse: collapse;">
      ${quizHtml}
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"Site Zing — CPSI" <${from}>`,
      to,
      replyTo: payload.email,
      subject: `Novo lead CPSI — ${payload.nome} (${payload.instituicao})`,
      html,
    });

    return {
      status: "success",
      message: "Mensagem enviada com sucesso! Em breve entraremos em contato.",
    };
  } catch (err) {
    console.error("Erro ao enviar e-mail CPSI:", err);
    return {
      status: "error",
      message:
        "Não foi possível enviar a mensagem. Tente novamente em instantes.",
    };
  }
}

"use server";

import nodemailer from "nodemailer";

export type ContatoFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export type ContatoPayload = {
  nome: string;
  email: string;
  cargo: string;
  organizacao: string;
  telefone: string;
  servico: string;
  assunto: string;
  contatos: string[];
};

const servicoLabels: Record<string, string> = {
  cpsi: "CPSI",
  "inovacao-aberta": "Inovação Aberta",
  intraempreendedorismo: "Intraempreendedorismo",
  "hubs-de-inovacao": "Hubs de Inovação",
  outro: "Outro",
};

const cargoLabels: Record<string, string> = {
  "c-level": "C-Level / Diretoria",
  gerencia: "Gerência",
  coordenacao: "Coordenação",
  analista: "Analista",
  outro: "Outro",
};

const contatoLabels: Record<string, string> = {
  whatsapp: "WhatsApp",
  email: "E-mail",
  ligacao: "Ligação",
};

export async function enviarContato(
  payload: ContatoPayload,
): Promise<ContatoFormState> {
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

  const contatosLegiveis = payload.contatos
    .map((c) => contatoLabels[c] ?? c)
    .join(", ");

  const html = `
    <h2 style="font-family: sans-serif; color: #0071E3;">Novo contato pelo site Zing</h2>
    <table style="font-family: sans-serif; font-size: 14px; border-collapse: collapse;">
      <tr><td style="padding: 6px 12px; font-weight: bold;">Nome:</td><td style="padding: 6px 12px;">${payload.nome}</td></tr>
      <tr><td style="padding: 6px 12px; font-weight: bold;">E-mail:</td><td style="padding: 6px 12px;">${payload.email}</td></tr>
      <tr><td style="padding: 6px 12px; font-weight: bold;">Cargo:</td><td style="padding: 6px 12px;">${cargoLabels[payload.cargo] ?? payload.cargo}</td></tr>
      <tr><td style="padding: 6px 12px; font-weight: bold;">Organização:</td><td style="padding: 6px 12px;">${payload.organizacao}</td></tr>
      <tr><td style="padding: 6px 12px; font-weight: bold;">Telefone:</td><td style="padding: 6px 12px;">${payload.telefone}</td></tr>
      <tr><td style="padding: 6px 12px; font-weight: bold;">Serviço:</td><td style="padding: 6px 12px;">${servicoLabels[payload.servico] ?? payload.servico}</td></tr>
      <tr><td style="padding: 6px 12px; font-weight: bold;">Assunto:</td><td style="padding: 6px 12px;">${payload.assunto || "—"}</td></tr>
      <tr><td style="padding: 6px 12px; font-weight: bold;">Prefere ser contactado por:</td><td style="padding: 6px 12px;">${contatosLegiveis || "—"}</td></tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"Site Zing" <${from}>`,
      to,
      replyTo: payload.email,
      subject: `Novo contato — ${payload.nome} (${servicoLabels[payload.servico] ?? payload.servico})`,
      html,
    });

    return {
      status: "success",
      message: "Mensagem enviada com sucesso! Em breve entraremos em contato.",
    };
  } catch (err) {
    console.error("Erro ao enviar e-mail de contato:", err);
    return {
      status: "error",
      message:
        "Não foi possível enviar a mensagem. Tente novamente em instantes.",
    };
  }
}

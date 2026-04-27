"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
  rating?: number;
};

const DEFAULT_AVATAR = "/testimonials/avatar-default.png";

const testimonials: Testimonial[] = [
  {
    name: "Espaço Teia",
    role: "Gestão de CPSI",
    company: "CAIXA ECONÔMICA FEDERAL",
    quote:
      "Na Caixa, a Zing acompanha o CPSI desde as primeiras edições e já apoia o 5º ciclo consecutivo, com fluxo customizado, aderência às exigências institucionais e registro completo das etapas.",
    image: "/testimonials/063cc9f2-478e-42e8-8987-76826cf241a2.jpg",
    rating: 5,
  },
  {
    name: "UBQ",
    role: "Desafios de Intraempreendedorismo",
    company: "UNIÃO BRASILEIRA DA QUALIDADE",
    quote:
      "No Grande Encontro da UBQ, a Zing gerencia por 3 anos o fluxo completo de submissão, avaliação e premiação de práticas de gestão, reunindo organizações de todo o Brasil em torno do compartilhamento de referências em qualidade, melhoria contínua e métodos ágeis.",
    image: "/testimonials/avatar-luisa-dias.png",
    rating: 5,
  },
  {
    name: "PBH",
    role: "Gestão de CPSI",
    company: "PREFEITURA DE BELO HORIZONTE",
    quote:
      "No PBH Inova, a Zing estruturou o primeiro CPSI de Belo Horizonte do edital à prova de conceito, conectando startups a desafios reais da administração pública e posicionando a cidade como referência nacional em inovação aberta.",
    image: "/testimonials/3d2e117c-abce-4212-a358-c44dd2c50e1c.jpg",
    rating: 5,
  },
  {
    name: "Espaço Teia",
    role: "Gestão de Hubs",
    company: "CAIXA ECONÔMICA FEDERAL",
    quote:
      "A Zing atua como plataforma white label, funcionando como hub digital que centraliza programas e conecta startups, setor público e parceiros em um ecossistema híbrido orientado a resultados.",
    image: "/testimonials/063cc9f2-478e-42e8-8987-76826cf241a2.jpg",
    rating: 5,
  },
  {
    name: "Porto de Suape",
    role: "Gestão de CPSI",
    company: "PERNAMBUCO",
    quote:
      "No Porto de Suape, a Zing apoiou o IEBT na estruturação inédita do modelo de CPSI da instituição — do diagnóstico regulatório à documentação técnica —, preparando a organização para contratar soluções inovadoras com segurança jurídica e aderência ao Marco Legal das Startups.",
    image: "/testimonials/6470aa14-c153-4f2f-9aa1-886324accff7.jpg",
    rating: 5,
  },
  {
    name: "Vumbora Startups",
    role: "Programa de Inovação Aberta",
    company: "BNB",
    quote:
      "No Vumbora Startups, a Zing centralizou todo o processo seletivo das 60 startups participantes — da inscrição à banca final —, conectando negócios inovadores às trilhas do programa idealizado pelo Banco do Nordeste.",
    image: "/testimonials/603cb4f9-1380-4691-bb2e-0f79df3af933.jpg",
    rating: 5,
  },
  {
    name: "Programa Conexões",
    role: "Programa de Inovação Aberta",
    company: "BH TEC",
    quote:
      "No Conexões, a Zing operacionalizou a segunda edição do primeiro programa de pós-aceleração de Minas Gerais, viabilizando a interação entre startups, mentores e parceiros estratégicos e dando escala à iniciativa do Sebrae Minas e BH-TEC.",
    image: "/testimonials/9a5f7e80-33b2-4d9f-839d-99f12da0986d.jpg",
    rating: 5,
  },
  {
    name: "Porto do Itaqui",
    role: "Gestão de CPSI",
    company: "MARANHÃO",
    quote:
      "No Porto do Itaqui, a Zing atuou na seleção de soluções inovadoras para o primeiro CPSI do Maranhão, conectando startups e empresas a desafios reais da operação portuária e marcando um avanço pioneiro no uso do Marco Legal das Startups no estado.",
    image: "/testimonials/3f38b367-b2e3-48b1-bbac-b4e47d8ad25e.jpg",
    rating: 5,
  },
  {
    name: "Programa Sementes",
    role: "Programa de Inovação Aberta",
    company: "GOVERNO DO ESPÍRITO SANTO",
    quote:
      "No Programa Sementes, realizado pelo Governo do Espírito Santo com apoio da Zing, foram investidos R$ 7,6 milhões em 50 startups captadas, com atuação em 9 municípios.",
    image: "/testimonials/b48ce8b6-a005-4c29-abf6-40028d425880.jpg",
    rating: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-start justify-center gap-1 text-xl text-[#2974d9]">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
      <span className="sr-only">{count} de 5 estrelas</span>
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="flex w-full flex-col items-center rounded-[10px] bg-white p-6 shadow-[0_16px_24px_0_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3">
        <div className="relative size-16 shrink-0 overflow-hidden">
          <Image
            src={t.image ?? DEFAULT_AVATAR}
            alt={t.name}
            fill
            className="object-cover w-full h-full rounded-full"
            sizes="64px"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-[15px] leading-none font-medium text-[#222e3f]">
            {t.name}
          </p>
          <p className="text-[11px] leading-none text-[#667082]">{t.role}</p>
          <p className="text-xs leading-none font-bold text-[#222e3f]">
            {t.company}
          </p>
        </div>
      </div>

      <div className="my-4 h-px w-full bg-[#e0e7f2]" />

      <p className="text-sm leading-relaxed text-greyPrimary">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="mt-4">
        <Stars count={t.rating ?? 5} />
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F2F8FD] py-20 max-md:py-12 overflow-clip">
      <div className="container flex flex-col gap-15">
        <h2
          data-aos="fade-up"
          className="text-greyPrimary text-center text-[clamp(28px,3vw,40px)] leading-[1.2] font-normal"
        >
          Quem já <span className="font-medium">inovou</span> com a gente
        </h2>

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            autoHeight
            pagination={{ clickable: true, el: ".testimonials-pagination" }}
            className="testimonials-swiper overflow-visible! [&_.swiper-wrapper]:items-center"
            breakpoints={{
              768: { slidesPerView: 3, spaceBetween: 16, autoHeight: false },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide
                key={i}
                className="flex! items-center justify-center"
              >
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="testimonials-pagination flex justify-center gap-2" />
      </div>
    </section>
  );
}

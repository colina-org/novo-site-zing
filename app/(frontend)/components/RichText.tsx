import React, { Fragment, type ReactNode } from "react";

// Renderizador enxuto de editor state Lexical (Payload richText).
// Renderiza inline: negrito (<strong>), itálico (<em>) e quebras de linha (<br/>),
// com parágrafos separados por <br/> — preservando o visual de títulos/descrições
// que antes eram um único heading/parágrafo com <strong>/<br/>.

type LexicalData =
  | { root?: { children?: LexNode[] } }
  | null
  | undefined;

type LexNode = {
  type?: string;
  text?: string;
  format?: number;
  children?: LexNode[];
};

function renderInline(nodes: LexNode[]): ReactNode[] {
  const out: ReactNode[] = [];
  nodes.forEach((n, i) => {
    if (n.type === "text") {
      let el: ReactNode = n.text;
      if ((n.format ?? 0) & 1) el = <strong className="font-bold">{el}</strong>;
      if ((n.format ?? 0) & 2) el = <em>{el}</em>;
      out.push(<Fragment key={i}>{el}</Fragment>);
    } else if (n.type === "linebreak") {
      out.push(<br key={i} />);
    } else if (n.children) {
      out.push(<Fragment key={i}>{renderInline(n.children)}</Fragment>);
    }
  });
  return out;
}

export default function RichText({ data }: { data?: unknown }) {
  const children = (data as LexicalData)?.root?.children;
  if (!children?.length) return null;

  const out: ReactNode[] = [];
  children.forEach((p, pi) => {
    if (pi > 0) out.push(<br key={`p${pi}`} />);
    out.push(<Fragment key={pi}>{renderInline(p.children ?? [])}</Fragment>);
  });
  return <>{out}</>;
}

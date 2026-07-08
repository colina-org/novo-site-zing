// Converte as strings do seed (com **negrito** e \n para quebras de linha)
// em editor state Lexical, formato esperado pelos campos richText do Payload.

type LexNode = Record<string, unknown>;

function textNode(text: string, bold: boolean): LexNode {
  return {
    type: "text",
    detail: 0,
    format: bold ? 1 : 0, // bit 1 = bold
    mode: "normal",
    style: "",
    text,
    version: 1,
  };
}

function lineBreak(): LexNode {
  return { type: "linebreak", version: 1 };
}

function inlineNodes(text: string): LexNode[] {
  const nodes: LexNode[] = [];
  // Segmentos separados por ** alternam normal/negrito.
  const parts = text.split("**");
  parts.forEach((part, idx) => {
    if (part === "") return;
    const bold = idx % 2 === 1;
    const lines = part.split("\n");
    lines.forEach((line, li) => {
      if (li > 0) nodes.push(lineBreak());
      if (line.length > 0) nodes.push(textNode(line, bold));
    });
  });
  if (nodes.length === 0) nodes.push(textNode("", false));
  return nodes;
}

function paragraph(text: string): LexNode {
  return {
    type: "paragraph",
    version: 1,
    format: "",
    indent: 0,
    direction: "ltr",
    textFormat: 0,
    children: inlineNodes(text),
  };
}

export function mdToLexical(md: string) {
  // \n\n separa parágrafos; \n simples vira quebra de linha (<br/>).
  const blocks = md.split("\n\n");
  return {
    root: {
      type: "root",
      version: 1,
      format: "",
      indent: 0,
      direction: "ltr",
      children: blocks.map((b) => paragraph(b)),
    },
  };
}

export function formatParagraph(text) {
  const parts = text
    .split(/(®|\n)/) // Divide em '®' e quebras de linha
    .map((part, i) => {
      if (part === "®") {
        return <sup key={`sup-${i}`}>®</sup>;
      }
      if (part === "\n") {
        return <br key={`br-${i}`} />;
      }
      return part;
    });

  return parts;
}

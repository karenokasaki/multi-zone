export function cn(...args) {
  return args
    .filter((a) => typeof a === "string")
    .map((s) => s.trim())
    .join(" ");
}

export function pf(prefix, string) {
  return string
    .split(" ")
    .map((s) => s.trim())
    .filter((s) => s !== "" && s !== " ")
    .map((s) => prefix + ":" + s)
    .join(" ");
}

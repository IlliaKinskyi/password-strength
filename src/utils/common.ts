export function Regex(p: string) {
  const regex = /[$-/:-?{-~!"^_@`\[\]#]/g;
  const letters = /[a-zA-Z]+/.test(p);
  const numbers = /[0-9]+/.test(p);
  const symbols = regex.test(p);

  const flags = [letters, numbers, symbols];

  return flags;
}

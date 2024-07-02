export function isValid(s: string): boolean {
  const pilha: string[] = [];
  const escopos: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      pilha.push(char);
    } else {
      if (pilha.length === 0) {
        return false;
      }

      const lastOpen = pilha.pop();
      if (escopos[char] !== lastOpen) {
        return false;
      }
    }
  }

  return pilha.length === 0;
}

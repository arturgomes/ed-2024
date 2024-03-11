export function contemAnagramas(strs: string[]): string[][] {
  // Inicializa um objeto para mapear os numeros aos seus indices
  let mapa: Record<string, string[]> = {};

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split("").sort().join("");
    if (!mapa[sortedStr]) {
      mapa[sortedStr] = [strs[i]];
    } else {
      mapa[sortedStr].push(strs[i]);
    }
  }
  // Retorna uma lista vazia se nenhum par for encontrado
  return Object.values(mapa);
}

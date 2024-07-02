/**
 * *
 * Dado um array de pares, onde cada par consiste em um identificador de produto ("id") e uma avaliação dada por um cliente ("rating").
 * * Os "id" dos produtos variam de 1 a 5000.
 * * As avaliações ("rating") variam de 0 a 5.
 * * O objetivo é calcular a média das avaliações de cada produto.
 * * Deve-se retornar o produto com a maior avaliação média.
 * * Se dois produtos possuírem a mesma média, retorna o produto com o ID menor.
 * @param avaliacoes
 * @returns
 */
export function encontrarMelhorAvaliacao(
  avaliacoes: [number, number][]
): string | null {
  const somaAvaliacoes: Record<number, number> = {};
  const contagemAvaliacoes: Record<number, number> = {};
  avaliacoes.forEach(([id, rating]) => {
    if (somaAvaliacoes[id]) {
      somaAvaliacoes[id] += rating;
      contagemAvaliacoes[id] += 1;
    } else {
      somaAvaliacoes[id] = rating;
      contagemAvaliacoes[id] = 1;
    }
  });

  let melhorId: string | null = null;
  let maiorMedia: number = 0;
  for (const id in somaAvaliacoes) {
    const media = somaAvaliacoes[id] / contagemAvaliacoes[id];
    if (
      media > maiorMedia ||
      (media === maiorMedia &&
        (melhorId === null || parseInt(id) < parseInt(melhorId)))
    ) {
      maiorMedia = media;
      melhorId = id;
    }
  }
  return melhorId;
}

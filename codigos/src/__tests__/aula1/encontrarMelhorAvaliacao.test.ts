import { encontrarMelhorAvaliacao } from "../../aula1/encontrarMelhorAvaliacao";

describe("encontrarMelhorAvaliacao", () => {
  test("deve retornar o produto com a maior avaliação média", () => {
    const avaliacoes: [number, number][] = [
      [1, 5],
      [2, 3],
    ];
    expect(encontrarMelhorAvaliacao(avaliacoes)).toBe("1");
  });

  test("deve retornar o produto com ID menor se dois produtos possuírem a mesma média", () => {
    const avaliacoes: [number, number][] = [
      [1, 5],
      [2, 5],
    ];
    expect(encontrarMelhorAvaliacao(avaliacoes)).toBe("1");
  });

  test("funciona com avaliações variadas", () => {
    const avaliacoes: [number, number][] = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ];
    expect(encontrarMelhorAvaliacao(avaliacoes)).toBe("4");
  });

  test("retorna null se não houver avaliações", () => {
    const avaliacoes: [number, number][] = [];
    expect(encontrarMelhorAvaliacao(avaliacoes)).toBeNull();
  });

  test("funciona com um único produto", () => {
    const avaliacoes: [number, number][] = [[1, 5]];
    expect(encontrarMelhorAvaliacao(avaliacoes)).toBe("1");
  });

  test("considera a média, não apenas a soma das avaliações", () => {
    const avaliacoes: [number, number][] = [
      [1, 5],
      [1, 5],
      [2, 10],
      [2, 10],
      [2, 10],
    ];
    expect(encontrarMelhorAvaliacao(avaliacoes)).toBe("2");
  });

  test("funciona com avaliações 0", () => {
    const avaliacoes: [number, number][] = [
      [1, 0],
      [2, 0],
      [3, 5],
    ];
    expect(encontrarMelhorAvaliacao(avaliacoes)).toBe("3");
  });

  test("funciona com ID de produtos grandes", () => {
    const avaliacoes: [number, number][] = [
      [4999, 5],
      [5000, 4],
    ];
    expect(encontrarMelhorAvaliacao(avaliacoes)).toBe("4999");
  });

  test("funciona com muitos produtos", () => {
    const avaliacoes: [number, number][] = [];
    for (let i = 1; i <= 5000; i++) {
      avaliacoes.push([i, Math.floor(Math.random() * 6)]);
    }
    // Este teste depende dos dados gerados aleatoriamente, então não temos uma expectativa fixa
    expect(typeof encontrarMelhorAvaliacao(avaliacoes)).toBe("string");
  });

  test("dá prioridade à maior média mesmo que o produto tenha menos avaliações", () => {
    const avaliacoes: [number, number][] = [
      [1, 5],
      [1, 5],
      [2, 4],
      [2, 4],
      [2, 4],
      [3, 5],
    ];
    expect(encontrarMelhorAvaliacao(avaliacoes)).toBe("1");
  });
});

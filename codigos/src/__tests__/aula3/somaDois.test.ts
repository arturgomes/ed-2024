import { somaDois } from "../../aula3/somaDois";

describe("somaDois", () => {
  test("encontra um par que soma o alvo", () => {
    expect(somaDois([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("retorna [-1, -1] quando nenhum par soma o alvo", () => {
    expect(somaDois([2, 7, 11, 16], 26)).toEqual([-1, -1]);
  });

  test("funciona com números negativos", () => {
    expect(somaDois([3, 4, -3, 90], 0)).toEqual([0, 2]);
  });

  test("funciona quando o alvo é um número negativo", () => {
    expect(somaDois([-1, -2, -3, -4], -6)).toEqual([1, 3]);
  });

  test("lida com um único número correspondendo à metade do alvo duas vezes", () => {
    expect(somaDois([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("ignora um único número quando é exatamente metade do alvo", () => {
    expect(somaDois([3, 3], 6)).toEqual([0, 1]);
  });

  test("funciona com um zero no array", () => {
    expect(somaDois([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });

  test("encontra um par quando os números estão em ordem reversa ao alvo", () => {
    expect(somaDois([15, 11, 7, 2], 9)).toEqual([2, 3]);
  });

  test("funciona com arrays grandes", () => {
    const arrayGrande = Array.from({ length: 10000 }, (_, i) => i);
    expect(somaDois(arrayGrande, 19997)).toEqual([9998, 9999]);
  });

  test("funciona com números grandes", () => {
    expect(
      somaDois([1000000000, 3, 500000000, 1500000000], 2000000000)
    ).toEqual([2, 3]);
  });
});

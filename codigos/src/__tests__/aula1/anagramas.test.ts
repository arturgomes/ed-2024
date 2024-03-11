import { contemAnagramas } from "../../aula1/anagramas";

describe("contemAnagramas", () => {
  function sortAnagrams(groups: string[][]): string[][] {
    return groups
      .map((group) => [...group].sort()) // Create a shallow copy and sort each group
      .sort((a, b) => a[0].localeCompare(b[0])); // Sort groups by first element
  }

  test("deve agrupar anagramas em português", () => {
    const input = ["amor", "roma", "ramo", "maro", "norma", "mora"];
    const actualOutput = contemAnagramas(input);
    const expectedOutput = [
      ["amor", "maro", "mora", "ramo", "roma"],
      ["norma"],
    ];
    expect(sortAnagrams(actualOutput)).toEqual(sortAnagrams(expectedOutput));
  });

  test("deve agrupar anagramas com números como strings", () => {
    const input = ["123", "321", "213", "132"];
    const expectedOutput = [["123", "132", "213", "321"]];
    expect(sortAnagrams(contemAnagramas(input))).toEqual(
      sortAnagrams(expectedOutput)
    );
  });

  // Other test cases in Portuguese with anagrams and numbers:
  test("deve agrupar palavras sem anagramas", () => {
    const input = ["gato", "cão", "pássaro"];
    const expectedOutput = [["gato"], ["cão"], ["pássaro"]];
    expect(sortAnagrams(contemAnagramas(input))).toEqual(
      sortAnagrams(expectedOutput)
    );
  });

  test("deve retornar grupos vazios para strings vazias", () => {
    const input = ["", "", ""];
    const expectedOutput = [["", "", ""]];
    expect(sortAnagrams(contemAnagramas(input))).toEqual(
      sortAnagrams(expectedOutput)
    );
  });

  test("deve agrupar mistura de palavras e números", () => {
    const input = ["amor", "123", "roma", "321"];
    const expectedOutput = [
      ["amor", "roma"],
      ["123", "321"],
    ];
    expect(sortAnagrams(contemAnagramas(input))).toEqual(
      sortAnagrams(expectedOutput)
    );
  });

  test("deve tratar strings com espaços como caracteres únicos", () => {
    const input = ["a m o r", "r o m a", "m a r o"];
    const expectedOutput = [["a m o r", "m a r o", "r o m a"]];
    expect(sortAnagrams(contemAnagramas(input))).toEqual(
      sortAnagrams(expectedOutput)
    );
  });
});

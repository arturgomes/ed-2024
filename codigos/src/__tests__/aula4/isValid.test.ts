import { isValid } from "../../../src/aula4/escopo"; // Ajuste o caminho de importação conforme necessário

describe("Testes para a função isValid", () => {
  test("Deve retornar true para ()", () => {
    expect(isValid("()")).toBe(true);
  });

  test("Deve retornar true para ()[]{}", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  test("Deve retornar false para (]", () => {
    expect(isValid("(]")).toBe(false);
  });

  test("Deve retornar false para ([)]", () => {
    expect(isValid("([)]")).toBe(false);
  });

  test("Deve retornar true para {[]}", () => {
    expect(isValid("{[]}")).toBe(true);
  });

  test("Deve retornar false para apenas um caractere de abertura (", () => {
    expect(isValid("(")).toBe(false);
  });

  test("Deve retornar false para string vazia", () => {
    expect(isValid("")).toBe(true); // Uma string vazia tecnicamente não viola nenhuma das regras
  });

  test("Deve retornar false para }{", () => {
    expect(isValid("}{")).toBe(false); // Caracteres em ordem incorreta
  });

  test("Deve retornar true para uma string complexa bem formada - ({[()()][]})", () => {
    expect(isValid("({[()()][]})")).toBe(true);
  });

  test("Deve retornar false para uma string complexa mal formada - ({[()][]})]", () => {
    expect(isValid("({[()][]})]")).toBe(false);
  });
});

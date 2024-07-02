/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param numeros
 * @param alvo
 * @returns
 */

export function somaDois(numeros: number[], alvo: number): number[] {
  // Inicializa um objeto para mapear os numeros aos seus indices
  let mapa: Record<number, number> = {};

  for (let i = 0; i < numeros.length; i++) {
    // Calcula o complemento do numero atual
    const complemento = alvo - numeros[i];
    // Verifica se o complemento já existe no mapa
    if (mapa[complemento] !== undefined) {
      // Retorna os indices do complemento e do numero atual
      return [mapa[complemento], i];
    }
    // Adiciona o numero atual ao mapa com seu indice
    mapa[numeros[i]] = i;
  }
  // Retorna uma lista vazia se nenhum par for encontrado
  return [-1, -1];
}
/**
 * Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */

let cont: number = 0;
function moverDiscos(
  n: number,
  origem: string,
  destino: string,
  auxiliar: string
): void {
  if (n === 1) {
    console.log(`Passo ${cont} - Disco 1 de ${origem} => ${destino}`);
    cont++;
  } else {
    moverDiscos(n - 1, origem, auxiliar, destino);
    cont++;

    console.log(`Passo ${cont} - Disco ${n} de ${origem} => ${destino}`);
    moverDiscos(n - 1, auxiliar, destino, origem);
  }
}

function iniciarTorreDeHanoi(): void {
  // Defina o número de discos aqui. Pode ser alterado para receber input do usuário se estiver rodando em um ambiente que permita (como um prompt no navegador).
  const numeroDeDiscos: number = 4; // Exemplo com 3 discos

  console.log(`Resolvendo a Torre de Hanoi para ${numeroDeDiscos} discos:`);
  moverDiscos(numeroDeDiscos, "A", "C", "B");
}

iniciarTorreDeHanoi();

{
  {
    {
      {
        {
          {
            {
              {
                {
                  {
                    {
                      {
                        {
                          {
                            {
                              {
                                console.log("to aqui dentro");
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

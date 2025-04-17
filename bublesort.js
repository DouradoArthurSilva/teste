let numeros = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7]; //array

for (let i = 0; i < numeros.length; i++) //loop para verificar se estão no lugar certo
    {
  for (let j = 0; j < numeros.length - 1; j++) { // loop para comparar o prox numero
    if (numeros[j] > numeros[j + 1]) { //verifica se o numero atual é maior que o proximo, se for faz a troca
      let temp = numeros[j];
      numeros[j] = numeros[j + 1];
      numeros[j + 1] = temp;  //as 3 linhas faz a troca em 2 numeros e guarda o primeiro em uma variavel temporaria e dps faz a troca
    }
  }
}

console.log(numeros); //roda a listagem
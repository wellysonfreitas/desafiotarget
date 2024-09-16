//Desafio 1

var INDICE = 13;
var SOMA = 0;
var K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

//Desafio 2

function isFibonacci(num) {
    let a = 0;
    let b = 1;
    
    if (num === a || num === b) {
      return `${num} pertence à sequência de Fibonacci.`;
    }
    
    let next = a + b;
    
    while (next <= num) {
      if (next === num) {
        return `${num} pertence à sequência de Fibonacci.`;
      }
      
      a = b;
      b = next;
      next = a + b;
    }
    
    return `${num} não pertence à sequência de Fibonacci.`;
  }
  
  const numero = 22; 
  console.log(isFibonacci(numero));
  
  

  

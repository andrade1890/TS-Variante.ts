// exemplo de funcão comum
function somarnumeros(a: number, b: number): number {
    return a + b;
}

// exemplo de arrow function com chaves 
const somarnumeros2 = (a: number, b: number): number => {
    return a + b;   
}

// exemplo de arrow function sem chaves
const somarnumeros3 = (a: number, b: number): number => a + b

console.log(`o resultado da soma é: ${somarnumeros(2, 3)}`);
console.log(`o resultado da arrow function com chaves é: ${somarnumeros2(2, 3)}`);
console.log(`o resultado da arrow function sem chaves é: ${somarnumeros3(2, 3)}`);
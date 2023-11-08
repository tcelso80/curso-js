/*Operadores e Operações*/

let n1 = 10;   // number inteiro 
let n2 = 2;   // number inteiro 
let n3 = "2"; // string texto

document.write(`N1 ${n1} <br>`);
document.write(`N2 ${n2} <br>`);
document.write(`N3 ${n3} <br>`);


console.log(n1 + n2); // adição
console.log(n1 - n2); // subtração 
console.log(n1 * n2); // multiplicação
console.log(n1 / n2); // divisao 
console.log(n1 % n2); // restou ou modulo 

console.log(n2 == n2); // igual a (apenas o conteudo)
console.log(n2 === n3); // identico a (tipo de dados)
console.log(n2 != n3); // n2 não é = n3 (apenas o conteudo)
console.log(n2 !== n3); // n2 Nao e identico a n3 (tipo de dados)

console.log(n1 > n2) // maior que 
console.log(n1 < n2) // menor que 
console.log(n1 >= n2) // maior ou igual 
console.log(n1 <= n2) // menor ou igual

let a = true; 
let b = false;
console.log(a && b);  // E  AND 
console.log(a || b); // OU  OR 
console.log(!a);    // Não NOT negação
console.log(!b); //

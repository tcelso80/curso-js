/*Arquivo Js aula 04 array*/

//Criando um Array 
let produtos = ['Arroz','Feijão','Leite'];

//Criando um array 
var codigos = Array(10,20,30);
var test = Array(2);
test[0]= "Olá"
test[1]= "Mundo!"
test[2]='Opa' // js é flexivel e permite aumenta o array dessa forma


let meses = ['Jan','Fev','Mar','Abr'];
meses[0]='Janeiro' // Alterando um array *****

// ADICIONAR no final push = empurre
produtos.push('Açucar','Trigo');
codigos.push(40,50,60,70);
meses.push('Mai','Jun','Ago','07')

// REMOVE no final pop = estourar 
produtos.pop();
codigos.pop();
meses.pop(); // posso ir utilizando quantas vezes quiser até zerar o array 


//ADICIONAR no inicio unshift 
produtos.unshift('Uva','Maça');

//REMOVER do inicio shift 
produtos.shift() // retira o primeiro

//REMOVER valores de uma posição especifica = splice 
// splice = emendar 
// posição inicial, quantos mover ? 
codigos.splice(1,3); // pula a posição inicial e retira 3 posições do array 

// COPIAR array slice = fatiar porção 
// posição inicial, quantos remover 
let meses1 = meses.slice(); // cópia de todo array 
let meses2 = meses.slice(0,3) // conta da posição 0 + 2. Exibe a 0 + as duas seguintes.

//VER TAMANHO DO ARRAY length comprimento 
meses.length
meses1.length
meses2.length

//spreed operator ... copiar comoo o array como o slice e adicioana mais  
let spreed = [...produtos,'Ovo','Pera']
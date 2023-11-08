/*Arquivo JS aula 05 objetos*/

//CRIAR OBJETOS
let pessoa = {

    nome  : 'Thaigo',
    idade : 40,
    peso  : 119.5,
    altura: 1.92,
    doador: false,

}

let produtos = {

    descricao : [],
    preco : []

}

const carros = {

    marca : ['Ford','Fiat','GM'],
    modelo: ['Ka','Uno','Corsa'],
    ano : [1999,2005,2010]

}

// como acessar uma propriedade usando "."
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura

//ACESSAR PROPRIEDADES usando ['']
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']


// OPERAÇÂO IMC = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

let resultado;

if (pessoa.idade > 20){

    if (imc<= 18.5){
        resultado = "Abaixo do peso";
    }

    if (imc> 18.5 && imc<=24.9){
        resultado = "Peso normal";
    }

    if (imc>= 25.0 && imc<=29.9){
        resultado =  "Pré-obesidade";
    }

    if (imc>= 30.0 && imc<=34.9){
        resultado = "Obesidade Grau 1";
    }

    if (imc>= 35.0 && imc<=39.9){
        resultado = "Obesidade Grau 2";
    }

    if (imc >= 40.0) {
        resultado = "Obesidade Grau 3";
    }

}

// .toFixed(x)
// limita o numero de casas decimais 
document.write(`<p> Seu IMC é: ${imc.toFixed(2)} </p>`);
document.write(`<p> Seu Resultado: ${resultado} </p>`);

//ALTERAR/ATUALIZAR VALOR de propriedade 
pessoa.nome = 'Julio'
produtos.descricao = ['Arroz'] // Primeira inserssão no array 
produtos.preco = ['4,99'] // Primeira inserssão no array 

// Usando spreed operator 
// quando inserimos uma posiçao a proxima ira sobscrever o spreed evita isso
produtos.descricao = [...produtos.descricao,'Feijao','Trigo']
produtos.preco = [...produtos.preco,'9,99','4,79']

//Usando spreed operator em objeto const 
carros.marca = [...carros.marca,'VW','BMW']
carros.modelo = [...carros.modelo,'Jetta','320I']
carros.ano = [...carros.ano,'2000','2023']


// comentário em linha 
/*
 comentário em bloco  
 */

 //criar variável com let ou var 
 let produto = 'Arroz'
 let quant = 2 
 let precoUnitario = 4.99
 let precoTotal = quant * precoUnitario

 document.write(`Preço Total R$ ${precoTotal} <br>`)

 console.log(new Intl.NumberFormat('pt-br').format(precoTotal))

 document.write(`Preço Total ${precoTotal.toLocaleString
    ('pt-br', { style : 'currency',
                currency : 'BRL'})
            } <hr>`)

//criar constante
const nome   = 'Thiago Celso' 
const peso   = 119.5
const altura = 1.92
const imc    = peso / (altura*altura)

document.write(`IMC: ${imc} <br>`)
document.write(`IMC: ${imc.toFixed(2)}<hr>`) 

// mais variaveis com operações 
let nota1 = 7.5
let nota2 = 5.5
let nota3 = 4.0
let mediaFinal = nota1 + nota2 + nota3 / 3

document.write(`Média Final: ${mediaFinal.toFixed(2)}<hr>`)

let compra = 1999.99
let desconto = 145.42
let compraComDesconto = compra - desconto

document.write(`Valor : ${compraComDesconto.toLocaleString('pt-br',
{style : 'currency', currency : 'BRL' })}<hr>`)



//Exercicios 1 exibir informações do cadastro  

document.write("<br><strong><center>Informações do Cadastro</center></strong><br>" )

const cadastro = {

    nome   : [],
    nacionalidade : [],
    idade  : [],
    peso   : [],
    altura : []

} 

cadastro.nome = [...cadastro.nome,'Thiago']
cadastro.nacionalidade = [...cadastro.nacionalidade,'Brasileira']
cadastro.idade = [...cadastro.idade,'43']
cadastro.peso = [...cadastro.peso,'119.5']
cadastro.altura = [...cadastro.altura,'1.92']

document.write(`<left>Nome : <strong>${cadastro.nome}</strong> <br>
Nacionalidade : <strong>${cadastro.nacionalidade}</strong> <br>
Idade : <strong>${cadastro.idade} anos</strong><br>
peso : <strong>${cadastro.peso} Kg </strong><br>
altura : <strong>${cadastro.altura} m </strong></left>`)

// exercicio 2 constante 
document.write("<br><br><strong><center>Frase do Dia</center></strong><br>" )

const dia = 10
const mes = 9
const ano = 2021
const frase = 'Seja Curioso. Leia de tudo. O que as pessoas chamam de inteligencia se resume a curiosidade'
const autor = 'Aaron Swartz'

document.write(`<center>${frase}</center><br><br>${autor}, ${dia}/${mes}/${ano}<br>`)


// Exercicio 3 Array 
document.write("<br><br><strong><center>Array de Meses do Ano</center></strong><br>" )

const meses = Array('Janeiro','Fevereiro','Março','Abril')

document.write("Meses : "+meses[0]+','+meses[1]+','+meses[2]+','+meses[3])

//exercico 4 Objeto 

document.write("<br><br><strong><center>Cadastro do Game</center></strong><br>" )

const cadastroJogo = { 
    
    descricao : 'FIFA 16',
    Autor : 'EASPORTS',
    AnoLanc : '2016'

} 

document.write(`Jogo : ${cadastroJogo.descricao} <br>
Desenvolvido por : ${cadastroJogo.Autor} <br>
Ano de Lançamento : ${cadastroJogo.AnoLanc}<br>`)

/*
* Exemplo de aplicação Node.js 
* Autor: Wellington Wagner F. Sarmento
*
*/

const express = require("express");
const app = express();
const routes = require("./routes"); //routes.js é um arquivo de módulo que eu criei
const path = require('path'); //usado para definir a forma correta de caminho das pastas do projeto
const ip = require ("ip"); //usado para saber sobre o ip que está sendo utilizado pela aplicacao

const PORT = process.env.PORT || 3030; //define a porta 3030 ou caso não esteja disponível, pera a porta que for entregue pelo servidor
const ADDRESS = "localhost";

//Criando usando rotas simples que estão no arquivo routes.js
app.use('/',routes); //routes contem o objeto ROUTER, criado no arquivo routes.js, onde estarao as ROTAS para nossa aplicacao

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

//Permitindo ler os valores enviados do navegador para o servidor usando Querystring. Exemplo: .../delUser?nome=fulano

app.use(express.json); //configura o express para receber mensagens no formarto JSON.

//Criando um servidor simples com o Node.js e o Express
const server = app.listen(PORT,ADDRESS,()=>{
    let host =  ip.address(); //procura e mostra o IP que está sendo usado na aplicação
    console.log(`Servidor executando no endereço ${host} e porta ${PORT}`);
});
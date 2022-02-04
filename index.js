/*
* Exemplo de aplicação Node.js 
* Autor: Wellington Wagner F. Sarmento
*
*/

const express = require("express");
const app = express();
const routes = require("./routes"); //routes.js é um arquivo de módulo que eu criei
const path = require('path');

const PORT = 3030;
const ADDRESS = "10.0.2.15";

//Criando usando rotas simples que estão no arquivo routes.js
app.use('/',routes); //routes contem o objeto ROUTER, criado no arquivo routes.js

app.set('view engine','jade');
app.set('views',path.join(__dirname,'views'));


//Criando um servidor simples com o Node.js e o Express
const server = app.listen(PORT,ADDRESS,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});
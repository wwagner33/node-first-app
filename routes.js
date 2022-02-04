const express = require("express");
const router = express.Router();



//************* Exemplode Rotas ************* 

/*

http://10.0.2.15:3030/css
http://10.0.2.15:3030/images
http://10.0.2.15:3030/index.html

/ = http://10.0.2.15:3030/
/about = http://10.0.2.15:3030/about
/cadastro =  http://10.0.2.15:3030/cadastro

*/



//Especifica a pasta contendo arquivos estáticos. 
//O nome 'public' não precisará ser colocado na rota 
//Para serem alcançados os arquivos e pastas que estão dentro dele. 
//Por isso na imagem que está na página home.ejs só há o indicativo para 'images'

router.use(express.static('public')); //Você usa o USE() para inserir um middleware no Express

let users = [
    {nome:"Wellington Wagner F. Sarmento",idade:46,email:"wwagner@virtual.ufc.br",url:'http://www.wellington.edu'},
    {nome:"Patrícia de Sousa Paula",idade:0,email:"ppaula@virtual.ufc.br",url:'http://www.patricia.edu'}
];

let html1 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1> Estes são os meus usuários do sistema: </h1>
\n
`;
let html2 = `
    
</body>
</html>
`;

let html;


// `` - Template String do Javascript (ECMA6^) - Permite incluir código dentro de uma string, através do ${}
let temp;

for(let cont=0;cont<users.length;cont++){
   temp = temp + `${JSON.stringify(users[cont])}<br/>`;
}

html = `${html1}<br/><b>${temp}</b><br/>${html2}`;


router.get('/',(req,res)=>{
    //REQUEST (REQ) - O que vem do forntend para o backend
    //RESPONSE (RES) - O que vai do backend para o Forntend
   
    //Criacao de minha primeira pagina dinamica
    //res.send(html);
    res.render("home",{listUsers: users});


}); // ()={} sendo utilizada como callback

router.get('/listUsers',(req,res)=>{
    res.render('listUsers',{listUsers: users});

});

router.get('/altUser',(req,res)=>{

    res.render('/showUser',{user: users[0]});
});

module.exports = router;

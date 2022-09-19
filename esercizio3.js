// di cosa ho bisogno?
// 1- ho bisogno di due variabili nome e password.
// poi inserisco username da input -> scrive in nome
//inserisco password da input e -> scrive in password
//if username == name &&password == pass  -> allora output login effettuato, else -> password o nome utente sbagliati

const prompt = require('prompt-sync')(); // installare "npm install readline-sync"
let name = 'nome';
let pass = 'pass';
let nameinput = '';
let passinput = '';
console.log(nameinput=prompt('registrare Username :'));
console.log(passinput=prompt('registrare Password :'));

// while(1==true){
//     name=nameinput;
//     pass=passinput;
// }

for(let i=0; i<=2; i++){
    name=nameinput;
    pass=passinput;
}

console.log(nameinput = prompt('inserire Username :'))
console.log(passinput = prompt('inserire Password :'))

if(nameinput==name && passinput==pass){
    console.log('login effettuato')
}   /*else if(nameinput!=name || passinput!=pass){
        console.log('Username o Password errati');
}*/   else if(nameinput!=name){
        console.log('username non esistente');
}   else if(passinput!=pass){
        console.log('password errata');
}
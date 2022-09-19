//permetta di indovinare una parola da una lista di parole
const prompt = require('prompt-sync')();

let arrA = ['ciao', 'notte', 'come', 'serie','sole', 'pioggia', 'universo', 'braferto' ];
console.log(arrA);
console.log('indovina la parola!');

let parola= '';
console.log(parola=prompt('inserisci una parola: '));
if(parola == 'braferto'){
    console.log('bravo, hai indovinato!')
} else if(parola != 'braferto'){
    console.log('no, non è questa la parola! gg loser')
}
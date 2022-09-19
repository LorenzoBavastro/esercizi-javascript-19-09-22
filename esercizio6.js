//creare una calcolatrice: prendendo in input 2 numeri e l'operatore da usare
//implementazione: creare operatori +,-,*,%
//inizializzare una variabile che inserisca il numero da input, lo salvi
//inizializzare l'operatore inserito + -> somma ecc ecc
//fare degli if in base agli operatori 
//Stampare i risultati

const prompt = require('prompt-sync')();
let Num1 = 0;
let Num2 = 0;
let Ope = '';


console.log(Num1=prompt('inserire un valore1: '));
console.log(Ope = prompt('inserire un operatore fra +;-;x;/; :'));
console.log(Num2=prompt('inserire un valore2: '));

let Sum = Num1+Num2;
let Div = Num1&Num2;
let Sot = Num1-Num2;
let Mol = Num1*Num2;

if(Ope == '+'){
    console.log(Sum);
} else if(Ope == '-'){
        console.log(Sot);
} else if(Ope == 'x'){
        console.log(Mol);
} else if(Ope == '/'){
        console.log(Div);
}

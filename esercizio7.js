// prendendo un numero in input J, stampate tutte le tabelline da 2 a J
//input J -> 2 for uno interno all'altro i =parset int %2 == 0 allora ritorno 2
const prompt = require('prompt-sync')();
let Num1 = 0;
Num1=parseInt(prompt('inserisci un numero'))

let tab=0

for(let i=2; i <= Num1 ;i++){
    for(let n=1; n <= 10; n++){
        tab=n*i;
        console.log(tab)
    }
}
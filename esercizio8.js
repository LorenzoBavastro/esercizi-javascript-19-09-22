//prendendo un numero in input K, ritornate tutti i numeri primi compresi tra 1 e K
//input k, un for che ti dice tutti i numeri fra 1 e k.
//parsetInt K e

const prompt = require("prompt-sync")();

let Num1=0;
Num1 = parseInt(prompt('inserisci un numero'));
let Num2=1;

for(let i=1; i <= Num1; i++) {
    
    if(i%i == 0 && i%1 == i){
    for(k=1; k<=i ; k++){
        if(i%2 == 1){
            console.log(i)
        }
        }
        
    }
}

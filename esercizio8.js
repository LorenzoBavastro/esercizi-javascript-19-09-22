//prendendo un numero in input K, ritornate tutti i numeri primi compresi tra 1 e K
//input k, un for che ti dice tutti i numeri fra 1 e k.
//parsetInt K e

const prompt = require("prompt-sync")();

let Num1=0;
Num1 = parseInt(prompt('inserisci un numero'));


for(let i=1; i <= Num1; i++) {
    let counter = 0;
        for(n=1; n<=i ; n++){
            if(counter >2 || counter >3){
                break;
            } else
            if(i%n == 0){
            counter ++;
            }
        }  
        if(counter == 2) { 
            console.log(i);
        }    
}

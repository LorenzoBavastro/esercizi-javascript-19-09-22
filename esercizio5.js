//input numero m. se m /3 da resto 0 allora significa che il num è divisibile per tre
//quindi console.log tutti i numeri 

const prompt = require('prompt-sync')();

let Numinput = 0
let n = 0;
Numinput=parseInt(prompt('inserisci un numero'));


for(let i=1; i<=Numinput; i++){
    if(i%3 == 0){
    n=n+i;
    console.log(n);
}
}
// 
//else if(Numinput%3 == 1){
       // null;
 //}
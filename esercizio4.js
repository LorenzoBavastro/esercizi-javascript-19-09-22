// input variabile N (numero)
// fare un for in cui i<n gira e ristampa tutti i valori di i+n 
const prompt = require('prompt-sync')();

let numinput = 0;
console.log(numinput = prompt('inserisci un numero'));
let n = 0;

for(let i = 1; i <= numinput; i++){
        n = n + i;
         console.log(n);
}

// //for(let i=0; i <= Numinput; i++){
//     let n=i+1;
//     let somma = i+n
//     let moltiplicazioone = i*n
//     console.log(i&& somma && i+n && moltiplicazioone && i*n);
// }
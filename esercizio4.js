// input variabile N (numero)
// fare un for in cui i<n gira e ristampa tutti i valori di i+n 
const prompt = require('prompt-sync')();

let Numinput = 0
console.log(Numinput = prompt('inserisci un numero'));

for(let i=0; i <= Numinput; i++){
    let n=i+1;
    console.log(i+n);
}

// //for(let i=0; i <= Numinput; i++){
//     let n=i+1;
//     let somma = i+n
//     let moltiplicazioone = i*n
//     console.log(i&& somma && i+n && moltiplicazioone && i*n);
// }
//definisco una variabile nome ed una numero
//assegna valori da input
// restituisci poi valore ed età  se inserito input nome o età

const prompt = require('prompt-sync')();
let name= '';
let age= 0;
let nameinput = '';
let ageinput = '';
console.log(nameinput=prompt('inserire Username :'));
console.log(ageinput=prompt('inserire Età :'));
for(let i=0; i<=2; i++){
    name=nameinput;
    age=ageinput;
}

if( age < 18) {
    console.log('non puoi votare')
} else if(age >= 18){
    console.log (name+age);
    console.log('puoi votare nella cabina x');
}
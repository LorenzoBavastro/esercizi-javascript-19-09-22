const prompt = require('prompt-sync')();


let Giocatore1 = 3;
let Giocatore2 = 3;
let mossa1 = '';
let mossa2= '';
let nuovoround = 1;

console.log(prompt('benvenuti nel gioco della morra cinese! Le mosse disponibili sono: carta, forbice e sasso...Premere invio per iniziare'));
console.log('vite giocatore 1: ', Giocatore1, ' e vite del giocatore 2: ', Giocatore2);
mossa1 = prompt('Sii parte! inserire la mossa del primo giocatore: ');
console.log('Il giocatore 1 ha giocato: ', mossa1);
console.clear();
mossa2 = prompt('Inserire la mossa del secondo giocatore: ');
console.log('Il Giocatore 2 ha giocato: ', mossa2);
console.clear();

if(Giocatore1 == 0 && Giocatore2 >= 1){
    console.log('vite giocatore 1: ', Giocatore1, ' e vite del giocatore 2: ', Giocatore2);
    console.log('la vittoria è del Giocatore 2! Congratulazioni! GG')
    nuovoround = 0;
    }  
    else if(Giocatore2 == 0 && Giocatore1 >= 1){
        console.log('vite giocatore 1: ', Giocatore1, ' e vite del giocatore 2: ', Giocatore2);
        console.log('la vittoria è del Giocatore 2! Congratulazioni! GG')
        nuovoround = 0;
        

    } else if( Giocatore1 > 0 && Giocatore2 > 0 ){
    
while(nuovoround >= 1){
            if(Giocatore1 > 0 && Giocatore2 > 0 && mossa1 == 'carta' && mossa2 == 'sasso' ||Giocatore1 > 0 && Giocatore2 > 0 && mossa1 == 'forbice' && mossa2 == 'carta' || mossa1 == 'sasso' && mossa2 == 'forbice'){
                console.log(mossa1, 'batte...', mossa2,' -1 vita al giocatore 2!')
                Giocatore2 = Giocatore2 - 1;
                console.log('vite giocatore 1: ', Giocatore1, ' e vite del giocatore 2: ', Giocatore2);
                mossa1 = prompt('inserire la mossa del primo giocatore: ');
                console.log('Il giocatore 1 ha giocato: ', mossa1);
                console.clear();
                mossa2 = prompt('Inserire la mossa del secondo giocatore: ');
                console.log('Il Giocatore 2 ha giocato: ', mossa2); 
                console.clear();
                } else if(Giocatore1 > 0 && Giocatore2 > 0 && mossa2 == 'carta' && mossa1 == 'sasso' ||Giocatore1 > 0 && Giocatore2 > 0 && mossa2 == 'forbice' && mossa1 == 'carta' || mossa2 == 'sasso' && mossa1 == 'forbice'){
                    console.log(mossa2, 'batte...', mossa1,' -1 vita al giocatore 1!')
                    Giocatore1 = Giocatore1 - 1;
                    console.log('vite giocatore 1: ', Giocatore1, ' e vite del giocatore 2: ', Giocatore2);
                    mossa1 = prompt('inserire la mossa del primo giocatore: ');
                    console.log('Il giocatore 1 ha giocato: ', mossa1);
                    console.clear();
                    mossa2 = prompt('Inserire la mossa del secondo giocatore: ');
                    console.log('Il Giocatore 2 ha giocato: ', mossa2); 
                    console.clear();
                }   else if(Giocatore1 > 0 && Giocatore2 > 0 && mossa2 == 'carta' && mossa1 == 'carta' ||Giocatore1 > 0 && Giocatore2 > 0 && mossa2 == 'forbice' && mossa1 == 'forbice' || mossa2 == 'sasso' && mossa1 == 'sasso'){
                        console.log('avete giocato la stessa mossa! si ritira!');
                        console.log('vite giocatore 1: ', Giocatore1, ' e vite del giocatore 2: ', Giocatore2);
                        mossa1 = prompt('inserire la mossa del primo giocatore: ');
                        console.clear();
                        console.log('Il giocatore 1 ha giocato: ', mossa1);
                        mossa2 = prompt('Inserire la mossa del secondo giocatore: ');
                        console.clear();
                        }
                         if(Giocatore1 == 0 && Giocatore2 >= 1){
                             console.log('vite giocatore 1: ', Giocatore1, ' e vite del giocatore 2: ', Giocatore2);
                             console.log('la vittoria è del Giocatore 2! Congratulazioni! GG')
                             nuovoround = 0;
                             ;
                         } else if(Giocatore2 == 0 && Giocatore1 >= 1){
                                     console.log('vite giocatore 1: ', Giocatore1, ' e vite del giocatore 2: ', Giocatore2);
                                     console.log('la vittoria è del Giocatore 2! Congratulazioni! GG')
                                     nuovoround = 0;
                                     break;
                        
 }
}
    }
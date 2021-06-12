/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
(bonus: controllate che il numero sia realmente di 4 cifre altrimenti restituite un alert) (modificato)  */

var output = document.getElementById("output");
/* Chiedi un numero di 4 cifre all’utente*/
var chooseANumber =prompt("un numero di 4 cifre");

//(bonus: controllate che il numero sia realmente di 4 cifre altrimenti restituite un alert) 
while( isNaN(chooseANumber) || chooseANumber.length !==4  ){
    var chooseANumber =prompt("un numero di 4 cifre");
}



//e calcola la somma di tutte le cifre che compongono il numero.

var result = 0 ;

for(var i = 0 ; i < chooseANumber.length ; i++){
    result += parseInt(chooseANumber[i]);
}

output.innerHTML= result;
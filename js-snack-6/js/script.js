//Stampa il cubo dei primi N numeri,
//dove N è un numero indicato dall’utente attraverso un prompt.
var number =parseInt( prompt("scrivi un numero"));
var cubic;

for(var x = 1; x <= number; x++){
 cubic = Math.pow( x , 3);
 document.getElementById("output").innerHTML+="<br>"+ cubic ;
}
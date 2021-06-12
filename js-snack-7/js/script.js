//snack-7
//Stampa le potenze di 2 fino a 1000.
var number =parseInt( prompt("scrivi un numero"));
var power;

for(var x = 0; x <= number; x++){
 power = Math.pow( 2 , x);
 document.getElementById("output").innerHTML+="<br>"+ power ;
}
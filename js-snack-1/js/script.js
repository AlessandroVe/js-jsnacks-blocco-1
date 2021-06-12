var firstNumber = parseInt(prompt("inserisci un numero"));
var secondNumber = parseInt(prompt("inserisci un altro numero"));
var output = document.getElementById("output");
if (firstNumber>secondNumber){
    output.innerHTML= firstNumber;
}else if(firstNumber===secondNumber){
    output.innerHTML+= firstNumber;
    output.innerHTML+= secondNumber;
}
else{
    output.innerHTML= secondNumber;
}
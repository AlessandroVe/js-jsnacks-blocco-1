var firstWord=prompt("inserisci una parola");
var secondWord=prompt("inserisci un'altra parola");
var output=document.getElementById("output");

    if(firstWord.length>secondWord.length){
        output.innerHTML=firstWord;
    }else if(firstWord.length<secondWord.length){
        output.innerHTML=secondWord;
    }else{
        output.innerHTML+=firstWord;
        output.innerHTML+=secondWord;
    }
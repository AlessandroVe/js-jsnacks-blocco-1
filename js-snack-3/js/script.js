var result=0;
var output=document.getElementById("output");
for(var i = 0; i<10; i++){
   var number= parseInt(prompt("inserisci un numero"));
   result+=number;
}
output.innerHTML= result;
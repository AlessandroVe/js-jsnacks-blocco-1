var user = prompt("Come ti chiami?");
var regedit = ["Mario","Anna","Luca"];
var output=document.getElementById("output");
var flag= false;

for(var i = 0; i<regedit.length ; i++ ){
   if(user===regedit[i]){
      flag=true;
   }
}
 if(flag){
    output.innerHTML="ok"
 }else{
   output.innerHTML="nope"
 }
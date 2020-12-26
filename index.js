// Code your solutions in this file
let names=["Lisa", "Kaitlin", "Jan"];

function writeCards(names){
 for (let i = 0 ; i < names.length ; i++) {
 
   console.log( 'Thank you, ${name[i]}  for the wonderful surprise gift!');
}
return names;
}


writeCards();


function countDown(){
let i=10;
while (i<11){
  console.log("${i}");
  i--;
}
}
countDown(10);
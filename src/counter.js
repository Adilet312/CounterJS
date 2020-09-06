import './css/styles.css';
let count = 0;
let max = 0;
let min = 0;
document.querySelector('.upperBoundery').addEventListener('input',function(event){
  max = event.currentTarget.value;
},false);
document.querySelector('.lowerBoundery').addEventListener('input',function(event){
  min = event.currentTarget.value;
},false);
//Lets get toggle currentTarget
document.querySelector('.down').addEventListener('click',down,false);

function down(){
  let result = document.querySelector('.result');
  result.innerText = minBoundery();
}

document.querySelector('.up').addEventListener('click',up,false);


function up(){
  let result = document.querySelector('.result');
  result.innerText = maxBoundery();
}

function maxBoundery(){
   if(max > count){
     return count++;
   }
   return "The number "+ `${count}`+" reached maximum bondery.";
}
function minBoundery(){
   if(min < count){
     return count--;
   }
   return "The number "+ `${count}`+" reached minimum bondery.";
}

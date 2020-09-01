import './css/styles.css';
let obj = {counter:0};
let max = 0;
let min = 0;


/*Assign min number*/
document.querySelector(".lowerBoundery").addEventListener('input',function(e){
  min = Number(e.currentTarget.value);
},false);

/*Assign max number*/
document.querySelector(".upperBoundery").addEventListener('input',function(e){
  max = Number(e.currentTarget.value);
},false);

let result = document.querySelector('.result');
/*Increase number by clicking*/
document.querySelector('.up').addEventListener('click',function(){
  if(max > obj.counter){
    debugger;
    result.innerText = `${obj.counter++}`;
  }
  else{
    result.innerText = "Reached max number "+`${obj.counter}`;
  }
},false);
/*Decrease number by clicking*/
document.querySelector('.down').addEventListener('click',function(){
  if(min < obj.counter){
    result.innerText = `${obj.counter--}`;
    console.log(min)
  }
  else{
    result.innerText = "Reached min number "+`${obj.counter}`;
  }
},false);

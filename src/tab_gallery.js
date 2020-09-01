import './css/styles.css';
let count = 0;
let result = document.querySelector('.result');
console.log(result)
document.querySelector('.decrease').addEventListener('click',increment,false);
document.querySelector('.increase').addEventListener('click',decrement,false);
function increment(){
  result.innerHTML = "0";
}
function decrement(){
  result.innerText = `${count--}`;
}

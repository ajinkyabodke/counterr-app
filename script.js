const incrementBtn = document.querySelector('#Increment')
const decrementBtn = document.querySelector('#Decrement')
const counterTxt = document.getElementById('counter')
let counter = 0

function incrementCounter(){
  counter++
  counterTxt.innerText = counter
}
function decrementCounter(){
  counter--
  counterTxt.innerText = counter
}
incrementBtn.addEventListener('click',incrementCounter)
decrementBtn.addEventListener('click',decrementCounter)
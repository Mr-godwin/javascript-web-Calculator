const userInput = document.getElementById("calculate")
const nine = document.getElementById("nine")
const eight = document.getElementById("eight")
const seven = document.getElementById("seven")
const six = document.getElementById("six")
const five = document.getElementById("five")
const four = document.getElementById("four")
const three = document.getElementById("three")
const two = document.getElementById("two")
const one = document.getElementById("one")
const point = document.getElementById("point")
const zero = document.getElementById("zero")
const equals = document.getElementById("equals")
const Add = document.getElementById("add")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
const subtract = document.getElementById("subtract")

nine.addEventListener("click", function(){
 userInput.innerHTML = "9"
})
eight.addEventListener("click", function(){
    userInput.innerHTML = "8"
   })
seven.addEventListener("click", function(){
    userInput.innerHTML = "7"
   })
six.addEventListener("click", function(){
    userInput.innerHTML = "6"
   })   
five.addEventListener("click", function(){
    userInput.innerHTML = "5"
   })
four.addEventListener("click", function(){
    userInput.innerHTML = "4"
   })
three.addEventListener("click", function(){
    userInput.innerHTML = "3"
   })   
two.addEventListener("click", function(){
    userInput.innerHTML = "2"
   })
one.addEventListener("click", function(){
    userInput.innerHTML = "1"
   })
point.addEventListener("click", function(){
    userInput.innerHTML = "."
   })   
zero.addEventListener("click", function(){
    userInput.innerHTML = "0"
   })
equals.addEventListener("click", function(){
    userInput.innerHTML = "="
   })
Add.addEventListener("click", function(){
    userInput.innerHTML = "+"
   })   
multiply.addEventListener("click", function(){
    userInput.innerHTML = "*"
   })
divide.addEventListener("click", function(){
    userInput.innerHTML = "/"
   })
subtract.addEventListener("click", function(){
    userInput.innerHTML = "-"
   })   
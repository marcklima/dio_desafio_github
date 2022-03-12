/* "use strict";
let idade = 15;
let nome = ' Paula';
console.log('nome: ${nome}, idade: ${idade}');
*/
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const button = document.getElementById("buttom");

function sum(a, b){
    return a + b;
}

button.addEventListener("click", function () {
    console.log(sum(input1.value, input2.value));
   
});

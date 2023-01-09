const arg1 = document.getElementById("arg-one"),
  arg2 = document.getElementById("arg-two"),
  op = document.getElementById("op"),
  label1 = document.getElementById("label1"),
  label2 = document.getElementById("label2"),
  label3 = document.getElementById("label3"),
  opt1 = document.getElementById("option-one"),
  opt2 = document.getElementById("option-two"),
  opt3 = document.getElementById("option-three");
let randNum = Math.floor(Math.random() * 4);
let rand1 = Math.floor(Math.random() * 999);
let rand2 = Math.floor(Math.random() * 999);
let num1, num2;
if (rand1 < rand2) {
    num1 = rand2;
    num2 = rand1;
    console.log("num1 was less");
} else {
    num1 = rand1;
    num2 = rand2;
}
arg1.textContent=num1;
arg2.textContent=num2;
console.log(arg1,arg2)
function add(){
  op.innerHTML=`<i class="fa-solid fa-plus"></i>`
  
}

function getOperation(){
    
}

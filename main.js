const arg1 = document.getElementById("arg-one"),
  arg2 = document.getElementById("arg-two"),
  op = document.getElementById("op"),
  label1 = document.getElementById("label1"),
  label2 = document.getElementById("label2"),
  label3 = document.getElementById("label3"),
  countdown = document.getElementById("countdown")
  confirmIcon = document.getElementById("confirm-icon"),
  confirmText = document.getElementById("confirm-text"),
  resultEl = document.getElementById("answer");
let randNum;
let rand1 = Math.floor(Math.random() * 999);
let rand2 = [11, rand1];
let num1, num2, result;

if (rand1 < rand2) {
  num1 = rand2[Math.floor(Math.random() * rand2.length)];
  num2 = rand1;
} else {
  num1 = rand1;
  num2 = rand2[Math.floor(Math.random() * rand2.length)];
}
arg1.textContent = num1;
arg2.textContent = num2;

function add() {
  op.innerHTML = `<i class="fa-solid fa-plus">+</i>`;
  result = num1 + num2;
}
function multiply() {
  op.innerHTML = `<i class="fa-solid fa-xmark">*</i>`;
  result = num1 * num2;
}
function subtract() {
  op.innerHTML = `<i class="fa-solid fa-minus">-</i>`;
  result = num1 - num2;
}

function getOperation() {
  randNum = Math.floor(Math.random() * 4);
  switch (randNum) {
    case 1:
      subtract();
      break;
    case 2:
      multiply();
      break;
    default:
      add();
      break;
  }
}

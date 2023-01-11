const arg1 = document.getElementById("arg-one"),
  arg2 = document.getElementById("arg-two"),
  op = document.getElementById("op"),
  label1 = document.getElementById("label1"),
  label2 = document.getElementById("label2"),
  label3 = document.getElementById("label3"),
  countdown = document.getElementById("countdown"),
  confirmIcon = document.getElementById("confirm-icon"),
  finalScore = document.getElementById("final-score"),
  confirmText = document.getElementById("confirm-text"),
  correct = document.getElementById("correct"),
  wrong = document.getElementById("wrong"),
  Qcount = document.getElementById("question-count"),
  resultEl = document.getElementById("answer"),
  mainView = document.getElementById("main"),
  restartBtn = document.getElementById('restart'),
  confirmView=document.getElementById("confirm");

// html elements////
let counter = 0;
let correctCount = 0, wrongCount = 0;


restartBtn.onclick=()=>{
  counter=0
  correctCount=0
  timeInSec=0
  wrongCount=0
  correct.textContent=0
  wrong.textContent=0
  console.log(timeInSec)
  main();
}


const main = () => {
  if(!mainView.classList.contains('view')){
    mainView.classList.add('view')
    confirmView.classList.remove('view')
  }
  //main function
  let randNum;
  let rand1 = Math.floor(Math.random() * 999);
  let rand2 = [11, rand1];
  let num1, num2, result;
  let countdownCount = 20;

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
    op.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    result = num1 - num2;
  }
}
getOperation();

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
  getOperation();
  counter++;
  Qcount.textContent = counter;

  const switchView=()=>{
    confirmView.classList.add('view')
    mainView.classList.remove('view')
    finalScore.textContent = `You got ${correctCount} out of 5 questions` 
  }

  let myCountdown = setInterval(() => {
    if (counter > 5) {
      switchView();
      clearInterval(myCountdown);
      clearInterval(timespent)
    } else {
      countdownCount--;
      countdown.textContent = countdownCount;
      if (countdownCount < 1) {
        clearInterval(myCountdown);
        wrongCount++;
        wrong.textContent = wrongCount;
        main();
      }
    }
  }, 1000);

  resultEl.oninput = () => {
    //input eventHandler
    console.log(result);
    console.log(resultEl.value);
    if (result === +resultEl.value) {
      //resets question and counter on input of correct value
      correctCount++;
      correct.textContent = correctCount;
      console.log("correctcount: " + correctCount);
      clearInterval(myCountdown);
      main();
      resultEl.value = "";
    } else {
      console.log("wrongcount: " + wrongCount);
    }
  };
};

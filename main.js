const arg1 = document.getElementById("arg-one"),
arg2 = document.getElementById("arg-two"),
op = document.getElementById("op"),
label1 = document.getElementById("label1"),
label2 = document.getElementById("label2"),
label3 = document.getElementById("label3"),
opt1 = document.getElementById("option-one"),
opt2 = document.getElementById("option-two"),
opt3 = document.getElementById("option-three");

const symbols =['*','+','-','/'];

const getRandomNum= ()=>{
    let randInt = Math.floor(Math.random()*99)
    return randInt;
}

const setValues=()=>{
    let rand1 = getRandomNum()
    let rand2 = getRandomNum()
    if(rand2>rand1){
        arg1.textContent=rand2;
        arg2.textContent = rand1;
    }else{
        arg1.textContent=rand1;
        arg2.textContent=rand2;
    }
}
setValues()
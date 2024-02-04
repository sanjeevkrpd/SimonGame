let gameSeq = [];
let userSeq = [];


let btns = ["yellow", "red","purple","green"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");
let btn1=document.getElementById("start");


document.addEventListener("keypress",function(){
    if(started == false){
        
        started = true;
        levelUp();
    }
});
document.addEventListener("touchstart",function(){
    if(started == false){
        
        started = true;
        levelUp();
    }
});


function gameFlash(btn){

    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};
function userFlash(btn){

    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
};


function levelUp(){

    userSeq= [];
        level++;
        h3.innerText = `Level ${level}`;

        let randIdx = Math.floor(Math.random()*4);
        let randColor = btns[randIdx];
        let randBtn = document.querySelector(`.${randColor}`);
        gameSeq.push(randColor);
        console.log(gameSeq);
        gameFlash(randBtn);
}


function checkAns(idx){

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
        
    }else{
        h3.innerHTML=`Game Over ! Your Score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.background= "red";
        setTimeout(function(){
            document.querySelector("body").style.background= "#fff";  
        },50);
        reset();
    }
}


function btnPress(){
    let btn = this;
    console.log(this);
    userFlash(this);

    userColor = this.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress)
};


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-button');
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')
let turnO = true;
const Winpatterns=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6] 
]
const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) =>{
    box.addEventListener('click',()=>{
        if (turnO){
            box.innerText = "O";
            turnO =false
        }else{
            box.innerText= "X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();

    });
})
const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
}
const disableBoxs = () =>{
    for (let box of boxes){
        box.disabled =true;
    }
}

const showWinner = (winner) =>{
    msg.innerText=`Congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxs();
}
const checkWinner = ()=>{
    for (let pattern of Winpatterns){
            let pos1val =boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;

            if (pos1val != "" && pos2val != "" && pos3val != "" ){
                if (pos1val === pos2val && pos2val===pos3val){
                    console.log("Winner",pos1val);
                    showWinner(pos1val)
                }
            }
    }
}
newGamebtn.addEventListener('click',resetGame);
resetbtn.addEventListener('click',resetGame);

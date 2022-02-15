
// selecting our tic tac toe squares to alter in javascript 
const squareElements = document.querySelectorAll("[data-square]")
const board = document.querySelector("#game-container")
// these variables we will use to apply CSS to each square by changing its class name
const X_CLASS = "x"
const CIRCLE_CLASS = "circle"

let xturn 

squareElements.forEach(square =>{
    square.addEventListener("click", squareClick, {once: true})

})

function squareClick(e){
    const square = e.target
    const currentClass = xturn ? X_CLASS : CIRCLE_CLASS
    placeMark(square, currentClass)
    turnSwap()

}

function placeMark (square, currentClass){
    square.classList.add(currentClass)
}

function turnSwap(){
    //  this simply swaps from one turn to the other by setting x turn to not x turn flip flopping it back and fourth
    xturn = !xturn
}
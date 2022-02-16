// selecting our tic tac toe squares to alter in javascript 
const squareElements = document.querySelectorAll("[data-square]")
const board = document.querySelector("#game-container")
// these variables we will use to apply CSS to each square by changing its class name
const X_CLASS = "x"
const CIRCLE_CLASS = "circle"

const WIN_CONDITIONS = [
    // first set is for horizontal win conditions using index position
    [0,1,2],
    [3,4,5],
    [6,7,8],
    // second set is for vertical win conditions using index position
    [0,3,6],
    [1,4,7],
    [2,5,8],
    // third is for diagonal win conditions using index position
    [0,4,8],
    [2,4,6]
]

// we must establish whos turn it is first before create additional functionality
let xturn 

// Adds an event listener to every square in square elements also lets them only be clicked once
squareElements.forEach(square =>{
    square.addEventListener("click", squareClick, {once: true})

})
// when we click a square we place a mark, check for win and swap turns 
function squareClick(e){
    // makes our click target the square we are over
    const square = e.target
    // this is a ternary first checks for if xturn is true if not then it uses Circle class 
    const currentClass = xturn ? X_CLASS : CIRCLE_CLASS
    placeMark(square, currentClass)
    if(winCheck(currentClass)){
        console.log("winner")
    }
    // swaps after we place a mark 
    turnSwap()

}
// To add our mark we only need to change our class on the square we click on to the mark we want
function placeMark (square, currentClass){
    square.classList.add(currentClass)
}

function turnSwap(){
    //  this simply swaps from one turn to the other by setting x turn to not x turn flip flopping it back and fourth
    xturn = !xturn
}

function winCheck(currentClass){
    // checking all the win conditions in the array if .some returns true if ANY win conditions are met
    return WIN_CONDITIONS.some(combination => {
        return combination.every(index => {
            // checking our combinations to see if there is a matching class in the correct combination
            return squareElements[index].classList.contains(currentClass)
        })
    })
}
const btns = document.querySelectorAll(".btn-pion");
let playerOne = "x";
let playerTwo = "o";

let currentPlayer = 0; 


for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.addEventListener("click", ()=> {
        const pions = btn.firstElementChild;
        if(currentPlayer % 2 == 0) {
            pions.src = "./assets/cross.svg"
            pions.alt = "pion" 
            btn.disabled           
        }
        else{
            pions.src = "./assets/circle.svg"
            pions.alt = "pion"
        }
        currentPlayer++;
    })
}

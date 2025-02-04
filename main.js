// Je declare toutes mes constantes
const btns = document.querySelectorAll(".btn-pion");
const crossTurn = document.getElementById("cross-turn");
const divOpacity = document.getElementById("truc");
const roundSect = document.getElementById("round-sect");
const headingTwo = document.getElementById("heading-two");
const nextRound = document.getElementById("next-round");
const crossScore = document.getElementById("cross-score");
const circleScore = document.getElementById("circle-score");
const playerWin = document.getElementById("player-win");

//Le numero du jouer : x = 0 ; o = 1
let currentPlayer = 0;

//Les alt de mes images
let CIRCLE_ALT = "circle";
let CROSS_ALT = "cross";

//On verifie si le jeu est actif ou non
let gameActive = true;

//On creer un nouveau tableau vide pour mettre les alt dedans
let arrayPions = ["", "", "", "", "", "", "", "", ""];

//On creer un tableau pour mettre les coups gagnants du morpions
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//on creer une boucle qui parcoure les boutons ou l'on mettera les images dedans
for (let i = 0; i < btns.length; i++) {
  //On creer une variable appeller "btn" qui est egale a "btns[btns.length]"
  let btn = btns[i];

  //On ajoute un evenement de clique sur les boutons
  btn.addEventListener("click", () => {
    //On creer une constante nommer "index" qui creer un tableau qui recupere tous les bouton et
    //apres on fait un indexOf pour recuperer l'index du tableau
    const index = [...btns].indexOf(btn);

    //On creer une constante nommer "pions" qui recupere les 1er elements enfants de btn
    const pions = btn.firstElementChild;

    //On verifie si le bouton est rempli
    if (pions.alt) {
      return;
    }

    //On verifie si currentPlayer est pair
    if (currentPlayer % 2 === 0) {
      pions.src = "./assets/cross.svg";
      pions.alt = CROSS_ALT;
      crossTurn.src = "./assets/circle.svg";
      crossTurn.alt = "circle-turn";
    } else {
      pions.src = "./assets/circle.svg";
      pions.alt = CIRCLE_ALT;
      crossTurn.src = "./assets/cross.svg";
      crossTurn.alt = "cross-turn";
    }

    //On donne les alt au tableau arrayPions vide
    arrayPions[index] = pions.alt;

    //On incremente currentPlayer pour faire +1
    currentPlayer++;

    //On ecoute le clique du bouton nextRound
    nextRound.addEventListener("click", () => {
      //On desactive le menu de victoire
      divOpacity.style.display = "none";
      roundSect.style.display = "none";

      //On vide la grilles des images et des alt
      pions.src = "";
      pions.alt = "";
      if (currentPlayer % 2 === 0) {
        circleScore.textContent = 1;
      } else {
        crossScore.textContent = 1;
      }
    });

    //On appelle la fonction checkGameState
    checkGameState();
  });
}

//On creer une fonction nommer "checkGameState"
function checkGameState() {
  //On boucle sur le tableau "winningCombos"
  for (let i = 0; i < winningCombos.length; i++) {
    let combo = winningCombos[i];
    let first = arrayPions[combo[0]];
    let second = arrayPions[combo[1]];
    let third = arrayPions[combo[2]];

    //On verifie si il y a une condition de victoire du tableau winningCombos
    if (first && first === second && first === third) {
      //On met le jeu a non-actif
      gameActive = false;
      //On log la victoire avec le message "WIN"
      console.log("WIN");
      //On active les div pour le menu de victoire
      divOpacity.style.display = "block";
      roundSect.style.display = "flex";
      roundSect.style.alignItems = "center";
      roundSect.style.justifyContent = "center";
      roundSect.style.flexDirection = "column";
      const pionRound = document.getElementById("pion-round");
      if (currentPlayer % 2 === 0) {
        pionRound.src = "./assets/circle.svg";
        headingTwo.style.color = "#F2B137";
        playerWin.textContent = "PLAYER 1 WINS!";
      } else {
        pionRound.src = "./assets/cross.svg";
        headingTwo.style.color = "#31C3BD";
        playerWin.textContent = "PLAYER 2 WINS!";
      }
    }
  }
}

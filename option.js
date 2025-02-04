const chooseDivPionCross = document.getElementById("choose-div-pion-cross");
const chooseDivPionCircle = document.getElementById("choose-div-pion-circle");

chooseDivPionCross.addEventListener("click", () => {
  chooseDivPionCross.classList.add("choose");
  const crossChooseActive = chooseDivPionCross.firstElementChild;
  crossChooseActive.src = './assets/cross-choose-active.svg'
});

chooseDivPionCircle.addEventListener("click", () => {
  chooseDivPionCircle.classList.add("choose");
  const circleChooseActive = chooseDivPionCircle.firstElementChild;
    circleChooseActive.src = './assets/circle-choose-active.svg'
});

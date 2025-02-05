const chooseDivPionCross = document.getElementById("choose-div-pion-cross");
const chooseDivPionCircle = document.getElementById("choose-div-pion-circle");
const chooseImgPionCross = document.getElementById("cross-choose-active");
const chooseImgPionCircle = document.getElementById("circle-choose-active");

chooseDivPionCross.addEventListener("click", () => {
	chooseDivPionCross.classList.add("choose");
	chooseDivPionCircle.classList.remove("choose");
	chooseImgPionCross.src = "./assets/cross-choose-active.svg";
	chooseImgPionCircle.src = "./assets/circle-choose.svg";
	localStorage.cross = "./assets/cross.svg"
});

chooseDivPionCircle.addEventListener("click", () => {
	chooseDivPionCircle.classList.add("choose");
	chooseDivPionCross.classList.remove("choose");
	chooseImgPionCross.src = "./assets/cross-choose.svg";
	chooseImgPionCircle.src = "./assets/circle-choose-active.svg";
	localStorage.circle = "./assets/circle.svg"	
});

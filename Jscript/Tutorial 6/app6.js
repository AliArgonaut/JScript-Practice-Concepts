const minNum = 1;
const maxNum = 10;

let Answer = Math.floor(Math.random() * (maxNum + 1 - minNum) + minNum);
let playerGuess = document.getElementById("playerGuess");
let submitBtn = document.getElementById("submitBtn");
let afterField = document.getElementById("afterField");
console.log(Answer);
let Attempts = 0;

submitBtn.onclick = function () {
  if (isNaN(playerGuess.value)) {
    afterField.textContent = "enter a number you dolt!";
    Attempts++;
  } else if (Number(playerGuess.value) != Answer) {
    afterField.textContent = "oops...try again!";
    Attempts++;
  } else {
    afterField.textContent = `you did it! the number was ${Answer} it only took you ${Attempts} failed attempts`;
  }
};

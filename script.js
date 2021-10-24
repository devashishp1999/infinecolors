`use strict`;

let randomColor = "";
// let clickCounter = 2;

document.querySelector(`#button`).addEventListener(`click`, function () {
  randomColor = `#` + Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector(`#button`).style.border = `0px`;
  document.querySelector(`body`).style.backgroundColor = randomColor;
  document.querySelector(`#text`).style.color = `#fff`;
  document.querySelector(`#text`).textContent = randomColor;
  // clickCounter--;
  // if (clickCounter === 0) {
  //   document.querySelector(`#text`).style.visibility = "hidden";
  // }
});

const button = document.querySelectorAll(".btn");
const clickToBeFollowed = [];
const container = document.querySelector(".container");
let playing = false;
let gameOver;
const mainLogic = function () {
  if (playing)  return;
  document.querySelector("body").classList.remove("gameover");
  playing = true;
  gameOver = false;
  console.log(playing);
  nextBtn();
  mouseClickChecker();
};

const mouseClickChecker = function () {
  gameOver = false;
  let clickedTargetArray = [];
  let i = 0;
  container.addEventListener("click", function (e) {
    if (!gameOver) {
      console.log(e.target);
      if (!e.target.classList.contains("btn")) return;
      const clickedTarget = +e.target.dataset.src;
      if (clickToBeFollowed[i] != clickedTarget) {
        const audio = new Audio('sounds/wrong.mp3');
        audio.play();
        gameOver = true;
        playing = false;
        document.querySelector('body').classList.add('gameover')
        console.log(container);
        return;
      }
      i++;
      const audio = new Audio(`sounds/${clickedTarget}.mp3`);
      audio.play();
      clickedTargetArray.push(clickedTarget);
      console.log(clickedTargetArray.join(""));
      console.log(clickToBeFollowed.join(""));
      if (clickedTargetArray.join("") != clickToBeFollowed.join("")) return;
      console.log(clickedTargetArray.join("") != clickToBeFollowed.join(""));
      i = 0;
      clickedTargetArray = [];
      nextBtn();
    }
  });
  return;
};

  document.addEventListener("keydown", mainLogic);

const nextBtn = function () {
  const currentBtn = Math.floor(Math.random() * 4);
  document
    .querySelector(`.btn[data-src ='${currentBtn}']`)
    .classList.add("pressed");
  setTimeout(function () {
    document
      .querySelector(`.btn[data-src ='${currentBtn}']`)
      .classList.remove("pressed");
  }, 300);
  clickToBeFollowed.push(currentBtn);
  console.log(clickToBeFollowed);
};

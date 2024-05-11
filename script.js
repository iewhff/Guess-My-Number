'use strict';
let rightNumber = Math.trunc(Math.random() * (100 - 0)) + 0;
let score = 10;
let highscore = 0;
let totalscore = 0;

console.log(rightNumber);

function assignHighscore() {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = score;
  }
}

function reset() {
  rightNumber = Math.trunc(Math.random() * (100 - 0)) + 0;
  console.log(rightNumber);
  score = 10;
  highscore = 0;
  totalscore = 0;
  document.querySelector('.totalscore').textContent = 0;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.score').textContent = 10;
}

function lose() {
  score--;
  if (score === 0) {
    document.querySelector('.number').textContent = totalscore;
    document.querySelector('h1').textContent = 'Your totalscore:';
    setTimeout(function () {
      document.querySelector('h1').textContent = 'Guess My Number!';
      document.querySelector('.number').textContent = '?';
    }, 1800);
    reset();
    document.querySelector('.message').textContent = 'You lost the game!';
  }
}

function wrong() {
  //on the click

  Number((document.querySelector('.guess').value = ''));
  document.querySelector('.score').textContent = score;

  document.querySelector('.label-highscore').style.color = '#222';
  document.querySelector('.label-totalscore').style.color = '#222';
  document.querySelector('.label-score').style.color = '#222';
  document.querySelector('.message').style.color = '#222';
  document.querySelector('.between').style.color = '#222';
  document.querySelector('h1').style.color = '#222';
  document.querySelector('.number').style.backgroundColor = '#222';
  document.querySelector('header').style.borderBottom = ' 7px solid #222';
  document.querySelector('.number').style.color = '#FFFFFF';
  document.querySelector('.again').style.backgroundColor = '#222';
  document.querySelector('.again').style.color = '#FFFFFF';
  document.querySelector('.check').style.backgroundColor = '#222';
  document.querySelector('.check').style.color = '#FFFFFF';
  document.querySelector('.guess').style.color = '#222';
  document.querySelector('.check').style.color = '#FFFFFF';
  document.querySelector('.check').style.backgroundColor = '222';
  document.querySelector('.guess').style.backgroundColor = 'red';
  document.querySelector('.guess').style.border = '4px solid #222';
  document.body.style.backgroundColor = 'red';

  //after 180ms
  setTimeout(function () {
    document.querySelector('.label-highscore').style.color = '#FFFFFF';
    document.querySelector('.label-totalscore').style.color = '#FFFFFF';
    document.querySelector('.label-score').style.color = '#FFFFFF';
    document.querySelector('.message').style.color = '#FFFFFF';
    document.querySelector('.between').style.color = '#FFFFFF';
    document.querySelector('h1').style.color = '#FFFFFF';
    document.querySelector('.number').style.backgroundColor = '#FFFFFF';
    document.querySelector('header').style.borderBottom = ' 7px solid #FFFFFF';
    document.querySelector('.again').style.backgroundColor = '#FFFFFF';
    document.querySelector('.again').style.color = '#222';
    document.querySelector('.check').style.backgroundColor = '#FFFFFF';
    document.querySelector('.check').style.color = '#222';
    document.querySelector('.number').style.color = '#222';
    document.querySelector('.guess').style.color = '#FFFFFF';
    document.querySelector('.guess').style.backgroundColor = '#222';
    document.querySelector('.guess').style.border = '4px solid #FFFFFF';
    document.body.style.backgroundColor = '#222';
  }, 180);
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Choose a number!';
  } else if (guess < 0 || guess > 100) {
    document.querySelector('.message').textContent =
      'Choose a number between 0 and 100!';
    setTimeout(function () {
      document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.number').textContent = '?';
      document.body.style.backgroundColor = '#222';
    }, 400);
  } else if (guess > rightNumber) {
    document.querySelector('.number').textContent = '👇';
    document.querySelector('.message').textContent = '📈 Too high!';
    lose();
    setTimeout(function () {
      document.querySelector('.number').textContent = '?';
      document.querySelector('.message').textContent = 'Start guessing...';
    }, 400);
    wrong();
  } else if (guess < rightNumber) {
    document.querySelector('.number').textContent = '👆';
    document.querySelector('.message').textContent = '📉 Too low!';
    lose();
    setTimeout(function () {
      document.querySelector('.number').textContent = '?';
      document.querySelector('.message').textContent = 'Start guessing...';
    }, 400);

    wrong();
  } else if (guess === rightNumber) {
    document.querySelector('.number').textContent = '🤟';
    assignHighscore();
    rightNumber = Math.trunc(Math.random() * (99 - 0)) + 0;
    console.log(rightNumber);
    totalscore += score;
    score = 10;
    document.querySelector('.totalscore').textContent = totalscore;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    Number((document.querySelector('.guess').value = ''));

    setTimeout(function () {
      document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.number').textContent = '?';
      document.body.style.backgroundColor = '#222';
    }, 400);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  reset();
});

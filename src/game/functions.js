export const gameStatus = {
  maxScore: 0,
  lastNumber: 0,
  lastUser: '',
  blamed: false,
  finish: false,
};

export function isNextNumber(userNumber, lastNumber) {
  const parsedUserNumber = parseInt(userNumber, 10);
  const parsedLastNumber = parseInt(lastNumber, 10) + 1;

  return parsedUserNumber === parsedLastNumber;
}

export function isMaxScore(userNumber, maxScore) {
  const parsedUserNumber = parseInt(userNumber, 10);
  const parsedMaxScore = parseInt(maxScore, 10);

  return parsedUserNumber > parsedMaxScore;
}

export function checkConsecutive(consecutive, lastUser, userName) {
  if (!consecutive && lastUser !== userName) {
    return true;
  }
  if (consecutive) return true;
  return false;
}

export function updateUI(gameOptions) {
  const gameSection = document.querySelector('section.game');

  const maxScoreDiv = gameSection.querySelector('header i');
  const mainSection = gameSection.querySelector('main p');
  const footerSection = gameSection.querySelector('footer p');

  if (gameOptions.blamed) {
    footerSection.classList.add('blame-animation');
    footerSection.textContent = 'Shame on ';

    const i = document.createElement('i');
    i.textContent = gameOptions.lastUser;
    footerSection.appendChild(i);

    footerSection.innerHTML += '!';
  } else {
    footerSection.classList.remove('blame-animation');
    footerSection.textContent = gameOptions.lastUser;
  }

  maxScoreDiv.textContent = gameOptions.maxScore;
  mainSection.textContent = gameOptions.lastNumber;
}

export function getLocalMaxScore() {
  const storedMaxScore = localStorage.getItem('maxScore');
  if (storedMaxScore) return JSON.parse(storedMaxScore);
  return false;
}

export function setLocalMaxScore(maxScore) {
  localStorage.setItem('maxScore', JSON.stringify(maxScore));
}

export function initLocalMaxScore(gameOptions) {
  const storedMaxScore = getLocalMaxScore();
  if (storedMaxScore) return storedMaxScore;
  return gameOptions.maxScore;
}

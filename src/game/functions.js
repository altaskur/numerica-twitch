export const gameStatus = {
  maxScore: 0,
  lastNumber: 0,
  lastUser: '',
  blamed: false,
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
  } else {
    footerSection.classList.remove('blame-animation');
  }

  maxScoreDiv.textContent = gameOptions.maxScore;
  mainSection.textContent = gameOptions.lastNumber;
  footerSection.textContent = gameOptions.lastUser;
}

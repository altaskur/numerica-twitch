export const gameOptions = {
  maxScore: 0,
  lastNumber: 0,
  lastUser: '',
  finished: false,
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

// eslint-disable-next-line no-shadow
export function updateUI(gameOptions) {
  const gameSection = document.querySelector('section.game');

  const maxScoreDiv = gameSection.querySelector('header i');
  const mainSection = gameSection.querySelector('main p');
  const footerSection = gameSection.querySelector('footer p');

  maxScoreDiv.textContent = gameOptions.maxScore;
  mainSection.textContent = gameOptions.lastNumber;
  footerSection.textContent = gameOptions.lastUser;
}

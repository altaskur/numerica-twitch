import tmi from 'tmi.js';

import {
  gameOptions, isMaxScore, isNextNumber, updateUI,
} from '../game/functions';

// eslint-disable-next-line import/prefer-default-export
export const client = new tmi.Client({
  channels: ['rothiotome', 'altaskur'],
});

client.on('message', (channel, tags, message) => {
  const userNumber = message.toString().trim();
  const userName = tags['display-name'];

  if (/^[1-9]\d*$/.test(userNumber)) {
    const maxScore = isMaxScore(userNumber, gameOptions.maxScore);
    gameOptions.lastUser = userName;

    if (gameOptions.lastUser !== userName && gameOptions.finished) {
      if (isNextNumber(userNumber, gameOptions.lastNumber)) {
        gameOptions.lastNumber = userNumber + 1;
        if (maxScore) gameOptions.maxScore = gameOptions.lastNumber;
      } else {
        gameOptions.finished = true;
        gameOptions.lastNumber = 0;
      }
      updateUI(gameOptions);
    }
  }
});

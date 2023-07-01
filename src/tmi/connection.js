import tmi from 'tmi.js';
import {
  gameStatus, isMaxScore, isNextNumber, updateUI,
} from '../game/functions';
import { gameOptions } from '../../public/options';

// eslint-disable-next-line import/prefer-default-export
export const client = new tmi.Client({
  channels: gameOptions.channels,
});

client.on('message', (channel, tags, message) => {
  const userNumber = parseInt(message.toString().trim(), 10);
  const userName = tags['display-name'];

  if (/^[1-9]\d*$/.test(userNumber)) {
    const maxScore = isMaxScore(userNumber, gameStatus.maxScore);
    // gameOptions.lastUser !== userName &&
    if (gameOptions.lastUser !== userName && !gameStatus.finished) {
      if (isNextNumber(userNumber, gameStatus.lastNumber)) {
        gameStatus.blamed = false;
        gameStatus.lastNumber = userNumber;
        if (maxScore) gameStatus.maxScore = gameStatus.lastNumber;
      } else {
        gameStatus.finished = true;
        gameStatus.lastNumber = 0;
        gameStatus.blamed = true;
      }
      gameStatus.lastUser = userName;
      updateUI(gameStatus);
    }
  }
});

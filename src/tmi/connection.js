import tmi from 'tmi.js';
import {
  checkConsecutive,
  gameStatus, isMaxScore, isNextNumber, updateUI,
} from '../game/functions';
import { gameOptions } from '../../public/options';

// eslint-disable-next-line import/prefer-default-export
export const client = new tmi.Client({
  channels: gameOptions.channels,
});

client.on('message', (channel, tags, message) => {
  const userNumber = parseInt(message.toString().trim(), 10);
  const userName = tags['display-name'].toString().trim().toLocaleLowerCase();

  if (/^[1-9]\d*$/.test(userNumber)) {
    console.log('Formato Correcto');
    const maxScore = isMaxScore(userNumber, gameStatus.maxScore);

    if (checkConsecutive(gameOptions.consecutiveNumbers, gameStatus.lastUser, userName)) {
      if (isNextNumber(userNumber, gameStatus.lastNumber)) {
        console.log('Número correcto');
        gameStatus.blamed = false;
        gameStatus.lastNumber = userNumber;
        if (maxScore) gameStatus.maxScore = gameStatus.lastNumber;
      } else {
        gameStatus.lastNumber = 0;
        gameStatus.blamed = true;
      }
      gameStatus.lastUser = userName;
      updateUI(gameStatus);
    }
  }
});

import { gameStatus, initLocalMaxScore, updateUI } from './src/game/functions';
import { client } from './src/tmi/connection';
import './style.css';

document.querySelector('#app').innerHTML = /* HTML */ `
  <section class="game">
    <header>
      <p>
        high Score: <i></i>
      </p>
    </header>
    <main>
      <section class="circle">
        <p></p>
      </section>
    </main>
    <footer>
      <p></p>
    </footer>
  </section>
`;

gameStatus.maxScore = initLocalMaxScore(gameStatus);
updateUI(gameStatus);
client.connect();

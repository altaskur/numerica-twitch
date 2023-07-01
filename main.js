import { gameStatus, updateUI } from './src/game/functions';
import { client } from './src/tmi/connection';
import './style.css';

document.querySelector('#app').innerHTML = /* HTML */ `
  <section class="game">
    <header> Max Score: <i></i> </header>
    <main>
      <p></p>
    </main>
    <footer>
      <p></p>
    </footer>
  </section>
`;

updateUI(gameStatus);
client.connect();

import { gameStatus, updateUI } from './src/game/functions';
import { client } from './src/tmi/connection';
import './style.css';

document.querySelector('#app').innerHTML = /* HTML */ `
  <section class="game">
    <header> <p>Max Score: <i></i></p> </header>
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

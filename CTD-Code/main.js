import './style.css'
import { setupAPI } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <div class="welcome">
    <h1>Welcome to Star Wars fanbase website!</h1>
    <h1>What would you like to see?</h1>
  </div>
  <div class="buttons">
    <button id="characters">people</button>
    <button id="planets">planets</button>
    <button id="movies">films</button>
    <button id="species">species</button>
    <button id="vehicles">vehicles</button>
    <button id="starships">starships</button>
  </div>
 
    <div id="response">
    
    </div>

  </div>
`

setupAPI(document.querySelector('#characters'));
setupAPI(document.querySelector('#planets'));
setupAPI(document.querySelector('#movies'));
setupAPI(document.querySelector('#species'));
setupAPI(document.querySelector('#vehicles'));
setupAPI(document.querySelector('#starships'));
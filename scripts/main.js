import { fetchQuotes } from "./dataBase.js";
import { displayQuotes } from "./quotes.js";

const quotesContainer = document.getElementById('quotes');

const render = async () => {
    await fetchQuotes();
    quotesContainer.innerHTML = displayQuotes();
}

render();

document.addEventListener('stateChanged', (e) => {
    console.log('State of data has changed. Regenerating HTML...');
    render(); // render is important here because we need to fetch the quotes again since new ones are added to the json file when submitted
})
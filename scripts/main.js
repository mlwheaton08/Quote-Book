import {getQuotes, addNewQuote} from './quotes.js';

const getNewQuoteId = () => {
    const quotes = getQuotes()
    let highestQuoteId = 0
      if(quotes.length > 0) {
        highestQuoteId = quotes.sort((a, b) => b.id - a.id)[0].id
      }
      return highestQuoteId + 1
  }

// SUBMIT NEW QUOTE AND DISPLAY ALL QUOTES
document.addEventListener('click', (e) => {
    if (e.target.id === 'submitButton') {
        const newId = getNewQuoteId()
        const newQuote = document.getElementById('quoteText').value;
        const newAuthor = document.getElementById('authorText').value;
        const newQuoteObject = {
            id: newId,
            quote: newQuote,
            author: newAuthor
        }
        addNewQuote(newQuoteObject)
    }
})

document.addEventListener('stateChanged', (e) => {
    displayQuotes()
})

// DISPLAY ALL QUOTES
const displayQuotes = () => {
    const quotes = getQuotes();
    let html = "";
    for (let i = 0; i < quotes.length; i++) {
        html += `
        <div class="quoteBlock">
            <p class="quote">${quotes[i].quote}</p>
            <p class="author">${quotes[i].author}</p>
        </div>`;
    }
    document.getElementById('quotes').innerHTML = html;
}

document.getElementById('displayQuotes').addEventListener('click', displayQuotes)

// HIDE ALL QUOTES
const hideQuotes = () => {
    document.getElementById('quotes').innerHTML = '';
}

document.getElementById('hideQuotes').addEventListener('click', hideQuotes)
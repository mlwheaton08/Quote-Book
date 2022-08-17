import {getQuotes} from './quotes.js';

const authors = [
    {
        id: 1,
        name: "Alexa"
    },
    {
        id: 2,
        name: "Lynn"
    },
    {
        id: 3,
        name: "Trevor"
    },
    {
        id: 4,
        name: "Sydney"
    }
]

const displayQuotes = () => {
    const quotes = getQuotes();
    let html = "";
    for (let i = 0; i < quotes.length; i++) {
        const author = authors.find(author => author.id === quotes[i].authorId);
        html += `
        <div class="quote">
            <p>${quotes[i].quote}</p>
            <p>${author.name}</p>
        </div>`;
    }
    
    document.getElementById('quotes').innerHTML = html;
}

displayQuotes();
const api = "http://localhost:8080"
const applicationState = {
    quotes: []  // code would still work without this empty array declared, but we do it anyway bc if code is incorrect, it will at least run and return undefined rather than breaking everything
}

export const fetchQuotes = async () => {
    const dataFetch = await fetch(`${api}/quotes`);
    const data = await dataFetch.json();
    applicationState.quotes = data;
}

export const getQuotes = () => {
    return applicationState.quotes.map(quote => ({...quote}));
}

export const addNewQuote = async (newQuoteObject) => {
    const response = await fetch(`${api}/quotes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newQuoteObject)
    })
    const responseJson = await response.json(response) // this line of code isn't needed, but can help with troubleshooting apparently
    
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// const authors = [
//     {
//         id: 1,
//         name: "Alexa"
//     },
//     {
//         id: 2,
//         name: "Lynn"
//     },
//     {
//         id: 3,
//         name: "Trevor"
//     },
//     {
//         id: 4,
//         name: "Sydney"
//     }
// ]
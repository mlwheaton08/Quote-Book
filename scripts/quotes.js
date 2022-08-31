const quotes = [
    {
        id: 1,
        date: "8/02/2022",
        author: "Alexa",
        quote: "Come eat lunch. The dogs are home and will eat you.",
        hashTags: ["AI", "Amazon", "Skynet"]
    },
    {
        id: 2,
        date: "8/01/2022",
        author: "Trevor",
        quote: "Here's some practice JavaScript.",
        hashTags: ["JavaScript", "Code Stars", "E20", "Banana"]
    },
    {
        id: 3,
        date: "7/27/2022",
        author: "Sydney",
        quote: "We won't hold your hands!",
        hashTags: ["Blanched Almond", "Important things", "REMEMBER", "mister"]
    },
    {
        id: 4,
        date: "4/27/2022",
        author: "Lynn",
        quote: "Ask for help, even if you break the company's website.",
        hashTags: ["Main Instructor", "Dr.", "Zen", "Chemistry", "forest"]
    }  
]

export const addNewQuote = (newQuoteObject) => {
    quotes.push(newQuoteObject);
}

export const getQuotes = () => {
    const copyOfQuotes = quotes.map(quote => ({...quote}));
    return copyOfQuotes;
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
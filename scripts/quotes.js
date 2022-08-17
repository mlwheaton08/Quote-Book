const quotes = [
    {
        id: 1,
        date: "8/02/2022",
        authorId: 1,
        quote: "Come eat lunch. The dogs are home and will eat you.",
        hashTags: ["AI", "Amazon", "Skynet"],
        isAuthorAlive: false
    },
    {
        id: 2,
        date: "8/01/2022",
        authorId: 3,
        quote: "Here's some practice JavaScript.",
        hashTags: ["JavaScript", "Code Stars", "E20", "Banana"],
        isAuthorAlive: true
    },
    {
        id: 3,
        date: "7/27/2022",
        authorId: 4,
        quote: "We won't hold your hands!",
        hashTags: ["Blanched Almond", "Important things", "REMEMBER", "mister"],
        isAuthorAlive: true
    },
    {
        id: 4,
        date: "4/27/2022",
        authorId: 2,
        quote: "Ask for help, even if you break the company's website.",
        hashTags: ["Main Instructor", "Dr.", "Zen", "Chemistry", "forest"],
        isAuthorAlive: true
    }  
]

export const getQuotes = () => {
    const copyOfQuotes = quotes.map(quote => ({...quote}));
    return copyOfQuotes;
}
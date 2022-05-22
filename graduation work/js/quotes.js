const quotes = [
    {
        quote: "Love is putting someone else's needs before yours.",
        author: "겨울왕국",
    },
    {
        quote: "I'd rather die tomorrow than live a hundred years without knowing you ",
        author: "포카혼타스",
    },
    {
        quote: "Our fate lives within us; you have to be brave enough to see it",
        author: "메리다와 마법의 숲",
    },
    {
        quote: "A single grain of rice can tip the scale. One man may be the difference between victory and defeat ",
        author: "뮬란",
    },
    {
        quote: "No matter how you heart is grieving, if you keep on believing, the dream that you wish will come true",
        author: "신데렐라",
    },
    {
        quote: "Any day spent with you is my favorite day",
        author: "Disney",
    },
    {
        quote: "You can't be happy everyday but there are happy things everyday",
        author: "Disney",
    },
    {
        quote: "Look beyond what you see",
        author: "Disney",
    },
    {
        quote: "The past can hurt, but you can either run from it or learn from it",
        author: "Disney",
    },
    {
        quote: "I can't go back to yesterday, Because I was a different person then",
        author: "Disney",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote ;
author.innerText = todaysQuote.author ;
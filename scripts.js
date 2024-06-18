document.getElementById('new-quote-button').addEventListener('click', generateQuote);

const quotes = [
    "The best way to predict the future is to invent it. – Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "You cannot find peace by avoiding life – Virginia Woolf.",
    "The strongest principle of growth lies in the human choice – George Eliot.",
    "We are all broken, that's how the light gets in. – Ernest Hemingway",
    "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well. – Voltaire",
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    "Be kind, for everyone you meet is fighting a hard battle. – Plato",
    "Ideas are cheap. It's the execution that is all important. — George R.R. Martin"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').textContent = quote;
}

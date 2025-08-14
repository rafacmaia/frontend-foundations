// DOM elements
let welcomeEl = document.getElementById('welcome-el');
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

// State variables
let name = 'Zouzou', greeting = 'Welcome back ';
let count = 0, saveCounter = 0;

welcomeEl.textContent = greeting + name;
welcomeEl.append(' 👋');

function increment() {
    countEl.textContent = String(++count);
}

function save() {
    if (saveCounter === 0) {
        saveEl.style.visibility = 'visible';
        saveEl.textContent += count;
    } else {
        saveEl.textContent += ' – ' + count;
    }
    count = 0;
    countEl.textContent = String(count);
    saveCounter++;
}

// saveEl.innerText += ' ' + count;
// saveEl.innerText += ' – ' + count;
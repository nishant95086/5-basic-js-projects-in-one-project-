let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#submit');
const userinput = document.querySelector('#number');
const pguess = document.querySelector('.guesses');
const remaining = document.querySelector('.remaing');
const loworhi = document.querySelector('.loworhi');
const result = document.querySelector('.results');

const p = document.createElement('p');
p.style.backgroundImage = "linear-gradient(45deg, #ff0034, #000000)";
p.style.borderRadius ="5px";
p.style.margin = "5px auto"
p.style.padding = "0 25px"
p.style.width = "180px"
p.style.cursor = "pointer";



let preguesses = [];
let numguesses = 1;
let play = true;

if (play) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateguess(guess);
    });
}

function validateguess(guess) {
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        preguesses.push(guess);
        if (numguesses === 10) {
            displayguess(guess);
            displaymessage(`Game Over! The number was ${randomNumber}`);
            endgame();
        } else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) {
    if (guess === randomNumber) {
        displaymessage(`You guessed it right!`);
        endgame();
    } else if (guess < randomNumber) {
        displaymessage(`Your number is too low.`);
    } else if (guess > randomNumber) {
        displaymessage(`Your number is too high.`);
    }
}

function displayguess(guess) {
    userinput.value = '';
    pguess.innerHTML += `${guess} `;
    numguesses++;
    remaining.innerHTML = `${11 - numguesses}`;
}

function displaymessage(message) {
    loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame">Start new game</h2>`;
    play = false;
    result.appendChild(p);
    newgame();
}

function newgame() {
    const newgameButton = document.querySelector('#newgame');
    newgameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        preguesses = [];
        numguesses = 1;
        pguess.innerHTML = '';
        remaining.innerHTML = `${11 - numguesses}`;
        loworhi.innerHTML = '';
        userinput.removeAttribute('disabled');
        result.removeChild(p);
        play = true;
    });
}
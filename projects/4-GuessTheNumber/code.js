let rendomNumber = parseInt(Math.random()*100 +1);
const submit =document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessslot =document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
console.log(rendomNumber);


let prevGuess =[];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a  valid number');
    }else if(guess<1 || guess>100){
        alert('please enter a  valid number between 1 and 100');
    }
    else{
        console.log('number validated');
        prevGuess.push(guess);
        if(numGuess === 10){
            displayguess(guess);
            displaymessage(`Game Over!! . Rendom number was ${rendomNumber}`);
            endGame();
        }
        else{
            displayguess(guess);
            checkGuess(guess);

        }
       
    }
}

function checkGuess(guess){
    if(guess === rendomNumber){
        displaymessage(`Congratulations! ${guess} is correct`);
        remaining.style.backgroundColor = 'green';
        endGame();}
        else if(guess < rendomNumber){
            displaymessage(`Sorry! ${guess} is too low`);
            remaining.style.backgroundColor = 'red';
        }
        else if(guess > rendomNumber){
            displaymessage(`Sorry! ${guess} is too high`);
            remaining.style.backgroundColor = 'red';
        }
}

function displayguess(guess){
    userInput.value='';
    guessslot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;


}

function displaymessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id ='newGame'>Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGame = document.querySelector("#newGame");
    newGame.addEventListener('click',function(e){
        rendomNumber = parseInt(Math.random()*100 +1);
        console.log(rendomNumber);
        prevGuess =[];
        numGuess = 1;
        guessslot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}



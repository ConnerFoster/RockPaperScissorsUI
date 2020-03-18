const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const display = document.getElementById('display');
const container = document.getElementById('container');
const words = ["Rock", "Paper", "Scissors"];
            let playerSelection = 'Rock';
            let computerSelection = 'Rock';

            function computerPlay() {
                compWord = words[Math.floor(Math.random()*words.length)];
                return compWord;
            }
            
            rock.addEventListener("click", rockFunc);
            
            function rockFunc(){
                playRound("Rock", compWord);
                display.textContent("You chose rock");
                container.appendChild(display);

             }
            

            




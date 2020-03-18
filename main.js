const words = ["Rock", "Paper", "Scissors"];
            let playerSelection = 'Rock';
            let computerSelection = 'Rock';

            function computerPlay() {
                compWord = words[Math.floor(Math.random()*words.length)];
                return compWord;
            }
            function playRound(playerSelection, computerSelection) {
                
                computerSelection = computerPlay();
                playerSelection = playerSelection.toLowerCase();
                computerSelection = computerSelection.toLowerCase();
                //console.log(playerSelection, computerSelection);
                while(playerSelection == computerSelection) {
                    console.log("Tie! Try again");
                    playerSelection = prompt("Enter rock, paper, or scissors. ");
                    playerSelection = playerSelection.toLowerCase();
                    computerSelection = computerPlay();
                    computerSelection = computerSelection.toLowerCase();
                }
                if (playerSelection == 'rock'){
                    if (computerSelection == 'scissors') {
                        return 1;
                    }
                    else{
                        return 2;
                    }
                }
                if (playerSelection == 'paper') {
                    if (computerSelection == 'rock'){
                        return 1;
                    }
                    else {
                        return 2;
                    }
                }
                if (playerSelection == 'scissors') {
                    if (computerSelection == 'paper') {
                        return 1;
                    }
                    else {
                        return 2;
                    }
                }
                else {
                    return 3;
                }
            }
            const rock = document.getElementById('rock');
            const paper = document.getElementById('paper');
            const scissors = document.getElementById('scissors');
            
            function gamer(){
                
             }
            

            




const jokenpo = ["Rock", "Paper", "Scissors"];
var playerScore = 0;
var computerScore = 0;
let playerSelection;
let messageScreen = document.getElementById('messageScreen');
let buttonSelected;

// change top screen message
function changeMessage(message){
    messageScreen.innerHTML = message;
}


// returns randomly one of jokenpo options
function computerPlay(){
    return jokenpo[Math.floor((Math.random() * jokenpo.length))]
}


// buttons settings
document.getElementById('rockButton').addEventListener('click', function(){
    buttonSelected = jokenpo[0];
    oneRound(buttonSelected);
});

document.getElementById('paperButton').addEventListener('click', function(){
    buttonSelected = jokenpo[1];
    oneRound(buttonSelected);
});
    
document.getElementById('scissorsButton').addEventListener('click', function(){
    buttonSelected = jokenpo[2];
    oneRound(buttonSelected);
});

document.getElementById('playerWins').innerHTML = playerScore;

document.getElementById('cpuWins').innerHTML = computerScore;



// one round of jokenpo
function oneRound(buttonSelected){

    playerSelection = buttonSelected;
    let computerSelection = computerPlay();

    if(playerSelection === computerSelection){
        return changeMessage("oh-ho, it's a Draw!");
    }else{
        if(playerSelection === "Rock"){
            switch(computerSelection){
                case "Scissors":
                    playerScore++
                    return changeMessage("You Win! Rock > Scissors!");
                case "Paper":
                    computerScore++
                    return changeMessage("You Lose! Paper > Rock!");
            }
        }else if(playerSelection === "Paper"){
            switch(computerSelection){
                case "Rock":
                    playerScore++
                    return changeMessage("You Win! Paper > Rock!");
                case "Scissors":
                    computerScore++
                    return changeMessage("You Lose! Scissors > Paper!");
            }
        }else{
            switch(computerSelection){
                case "Rock":
                    computerScore++
                    return changeMessage("You Lose! Rock > Scissors");
                case "Paper":
                    playerScore++
                    return changeMessage("You Win! Scissors > Paper");
            }
        }
    }
}


//5 rounds of jokenpo
function game(){
    for(let cont = 0; cont < 5; cont++){
        oneRound();
        
    }

    if(playerScore === computerScore){
        changeMessage("Draw!! Restart page to play again!");
    }else if(playerScore > computerScore){
        changeMessage("You're the Winner!! Press F5 to play again :");
    }else{
        changeMessage("You Lose! :c Press F5 for an rematch");
    }
}


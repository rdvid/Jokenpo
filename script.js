const jokenpo = ["Rock", "Paper", "Scissors"];
var playerScore = 0;
var computerScore = 0;

// a function who returns randomly one of jokenpo options
function computerPlay(){
    return jokenpo[Math.floor((Math.random() * jokenpo.length))]
}

// a function for string treatment to prevent errors
function caseFix(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// one round of jokenpo
function oneRound(playerSelection, computerSelection){
    playerSelection = caseFix(playerSelection)
    computerSelection = caseFix(computerSelection)
    if(playerSelection === computerSelection){
        return "oh-ho, it's a Draw!"
    }else{
        if(playerSelection === "Rock"){
            switch(computerSelection){
                case "Scissors":
                    playerScore++
                    return "You Win! Rock > Scissors!"
                case "Paper":
                    computerScore++
                    return "You Lose! Paper > Rock!"
            }
        }else if(playerSelection === "Paper"){
            switch(computerSelection){
                case "Rock":
                    playerScore++
                    return "You Win! Paper > Rock!"
                case "Scissors":
                    computerScore++
                    return "You Lose! Scissors > Paper!"
            }
        }else{
            switch(computerSelection){
                case "Rock":
                    computerScore++
                    return "You Lose! Rock > Scissors"
                case "Paper":
                    playerScore++
                    return "You Win! Scissors > Paper"
                    
            }
        }
    }
}


// 5 rounds of jokenpo
function game(){
    for(let cont = 0; cont < 5; cont++){
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = computerPlay();
        console.log(oneRound(playerSelection, computerSelection))
        console.log(`Player: ${playerScore} X Machine: ${computerScore}`)
    }
    if(playerScore === computerScore){
        console.log("Draw!! Restart page to play again!")
    }else if(playerScore > computerScore){
        console.log("You're the Winner!! Press F5 to play again :)")
    }else{
        console.log("You Lose! :c Press F5 for an rematch")
    }
}


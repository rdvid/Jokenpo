const jokenpo = ["Rock", "Paper", "Scissors"];


// a function who returns randomly one of jonkenpo options
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
                    return "You Win! Rock > Scissors!"
                    break
                case "Paper":
                    return "You Lose! Paper > Rock!"
                    break
            }
        }else if(playerSelection === "Paper"){
            switch(computerSelection){
                case "Rock":
                    return "You Win! Paper > Rock!"
                    break
                case "Scissors":
                    return "You Lose! Scissors > Paper!"
                    break
            }
        }else{
            switch(computerSelection){
                case "Rock":
                    return "You Lose! Rock > Scissors"
                    break
                case "Paper":
                    return "You Win! Scissors > Paper"
                    break
            }
        }
    }
}


function game(){
    let score = 0
    for(let cont = 0; cont < 5; cont++){
        oneRound(prompt("Rock, Paper or Scissors?"), computerPlay())
        
    }
}

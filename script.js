const gameArray = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0, computerScore = 0;


// update score
function updateScore(){
    document.getElementById('playerWins').replaceChildren();
    document.getElementById('cpuWins').replaceChildren();
    document.getElementById("playerWins").append(playerScore);
    document.getElementById("cpuWins").append(computerScore);
    
}


// edit the screen message

function messageChange(string){
    document.getElementById('messageScreen').replaceChildren();
    return document.getElementById('messageScreen').append(string);
}


// return a random jokenpo option

function computerPlay(){
    let result = Math.floor(Math.random() * gameArray.length); 
    return gameArray[result];
}


// one round

function oneRound(playerSelection){
    let computerSelection = computerPlay();
    
    if(playerSelection === computerSelection){
        messageChange("Too bad...It's a draw")
    }else if(playerSelection === "Paper" && computerSelection === "Rock"){
        messageChange("You Win, Paper > Rock :)")
        playerScore++
    }else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        messageChange("You Win, Rock > Scissors :)")
        playerScore++
    }else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        messageChange("You Win. Scissors > Paper :)")
        playerScore++
    }else{
        messageChange(`You Lose :c ${computerSelection} > ${playerSelection}`)
        computerScore++
    }

    updateScore();

}

function game(){
    const options = document.querySelectorAll('#buttonList>button');
    options.forEach(option => option.addEventListener('click', (e) => 
    oneRound(e.target.className)))
}

messageChange("Choose your option to start")

game();
const gameArray = ['Rock', 'Paper', 'Scissors'];

// return a random jokenpo option

function computerPlay(){
    let result = Math.floor(Math.random() * gameArray.length); 
    return gameArray[result];
}


// one round

function oneRound(playerSelection){
    let computerSelection = computerPlay()
    if(playerSelection === computerSelection){

    }


}



function initialize() {
    const $options = document.querySelectorAll('#options>div');
    $options.forEach(option => option.addEventListener('click', (e) => 
    playRound(e.target.className)));
}


function game(){
    const options = document.querySelectorAll('#buttonList>button');
    options.forEach(option => option.addEventListener('click', (e) => 
    oneRound(e.target.className)))
}

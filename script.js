const jokenpo = ["Rock", "Paper", "Scissors"];


function computerPlay(){
    return jokenpo[Math.floor((Math.random() * jokenpo.length))]
}

function caseFix(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function oneRound(playerSelection, computerSelection){
}


console.log(oneRound("RoCk", "SciSsoRs"))
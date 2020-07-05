let computerPlay = () => {
    let x = Math.floor((Math.random() * 3) + 1);
    let y;
    if(x == 1){
        y = "Rock"
    }
    else if(x == 2){
        y = "Paper"
    }
    else if(x == 3){
        y = "Scissor"
    }
    y = y.toLowerCase();
    console.log("computer:" + y);
    return y;
};

let playerSelection = () => {
    let x = window.prompt("Input Player Selection:");
    x = x.toLowerCase();
    console.log("player:" + x);
    return x;   
};


let playGame = (p,c) => {
    let r;
        if (p == "rock" && c == "scissor") {
            r = "Player wins! rock beats scissor"
        } else if (c == "rock" && p == "scissor") {
            r = "Computer wins! rock beats scissor"
        } else if (p == "rock" && c == "paper") {
            r = "Computer wins! paper beats rock"
        } else if (c == "rock" && p == "paper") {
            r = "Player wins! paper beats rock"
        } else if (p == "paper" && c == "scissor") {
            r = "Computer wins! scissor beats paper"
        } else if (c == "paper" && p == "scissor") {
            r = "Player wins! scissor beats paper"
        } else if (p == c) {
            r = "Its a tie!"
        }


    return r;
};

console.log(playGame(playerSelection(),computerPlay()));



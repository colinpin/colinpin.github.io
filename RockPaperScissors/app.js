// THIS IS WHAT THE ROBOT PLAYS:
// 1 = ROCK
// 2 = PAPER
// 3 = SCISSORS

var play = function(item){
    var player = item; //Player plays what's on the button
    var opponent = Math.floor(Math.random() * 3) + 1; //This gets a random number between 1 and 3
    console.log(player); //Logs the player's choice
    console.log(opponent); //Logs the computer's choice (number)
    //Now the Logic behind who wins and who loses
    if (((player === "rock") && (opponent === 1)) || ((player === "paper") && (opponent === 2)) || ((player === "scissors") && (opponent === 3))) {
        document.getElementById("result").textContent = "It's a Tie!";
    } else if (((player === "rock") && (opponent === 3)) || ((player === "paper") && (opponent === 1)) || ((player === "scissors") && (opponent === 2))) {
        document.getElementById("result").textContent = "You Win!";
    } else if (((player === "rock") && (opponent === 2)) || ((player === "paper") && (opponent === 3)) || ((player === "scissors") && (opponent === 1))) {
        document.getElementById("result").textContent = "You Lose!";
    };
};

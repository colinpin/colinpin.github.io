/* KEY
— — — — — — —
ROCK = 1
PAPER = 2
SCISSORS = 3  */

var play = function(item){
    var player = item;
    var opponent = Math.floor(Math.random() * 3) + 1;
    console.log(player);
    console.log(opponent);
    if (((player === "rock") && (opponent === 1)) || ((player === "paper") && (opponent === 2)) || ((player === "scissors") && (opponent === 3))) {
        document.getElementById("result").textContent = "It's a Tie!";
    } else if (((player === "rock") && (opponent === 3)) || ((player === "paper") && (opponent === 1)) || ((player === "scissors") && (opponent === 2))) {
        document.getElementById("result").textContent = "You Win!";
    } else if (((player === "rock") && (opponent === 2)) || ((player === "paper") && (opponent === 3)) || ((player === "scissors") && (opponent === 1))) {
        document.getElementById("result").textContent = "You Lose!";
    };
};

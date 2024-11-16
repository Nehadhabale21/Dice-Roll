change = () => {
    const player1 = Math.floor(Math.random() * 6 + 1);
    const player1dice = `/Dice Roll/images/${player1}dice.png`;
    document.getElementById("check1").setAttribute('src',player1dice);


    const player2 = Math.ceil(Math.random() * 6 );
    const player2dice = `/Dice Roll/images/${player2}dice.png`;
    document.getElementById("check2").setAttribute('src',player2dice);


    if(player1>player2){
        document.querySelector("h1").innerHTML = "Player 1 won";
    }
    else if(player1<player2){
        document.querySelector("h1").innerHTML = "Player 2 won";
    }
    else{
        document.querySelector("h1").innerHTML = "DRAW";
    }
}
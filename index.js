let button = document.getElementById('button');
button.addEventListener('click',gameMove);

let clickCounter = button.getAttribute('value');

// Function for make next move in game.

function gameMove(){

    let string1 = "YOUR TURN";
    let string2 = "MY TURN";
    let stringVictory = "YOU WIN";
    let stringLost = "I WIN";

    if (clickCounter != "YOUR TURN") {
        //BINDING WITH OTHER GAME LOGIC
        clickCounter = string1;
        button.setAttribute('value', `${string2}`);
    } else if(clickCounter != "MY TURN"){
        //BINDING WITH OTHER GAME LOGIC
        clickCounter = string2;
        button.setAttribute('value', `${string1}`);
    }

};
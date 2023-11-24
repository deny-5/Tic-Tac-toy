let button = document.getElementById('button');
button.addEventListener('click',gameMove);

let clickCounter = button.getAttribute('value');
gridInit();

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

function gridInit() {

    let color = 'rgb(187, 199, 209)';

    let elem = document.getElementById("grid");
    elem.setAttribute(`style`,`display: grid;
                               grid-template-rows:
                               repeat(3, 100px);
                               grid-template-columns: 
                               repeat(3, 100px);
                               background-color: ${color};`);
                               
    for (let i = 1 ; i <= 9 ; i++) {
        
        let newdiv = document.createElement("div");
        newdiv.className = `${i}_grid_el`;
        elem.append(newdiv);       
    }
}
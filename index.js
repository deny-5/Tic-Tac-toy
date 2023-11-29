//          GAME_MAIN_CODE

let cell_1 = document.getElementById('num-1');
cell_1.addEventListener('click',gameMove);
cell_1.addEventListener('click',()=>{cell_1.setAttribute('style', `background-image: url('./Group 3.png') ;
background-size: 90px 90px;`)});

let cell_2 = document.getElementById('num-2');
cell_2.addEventListener('click',gameMove);
cell_2.addEventListener('click',()=>{cell_2.setAttribute('style', `background-image: url('./Group 3.png') ;
background-size: 90px 90px;`)})

let cell_3 = document.getElementById('num-3');
cell_3.addEventListener('click',gameMove);
cell_3.addEventListener('click',()=>{cell_3.setAttribute('style', `background-image: url('./Group 3.png') ;
background-size: 90px 90px;`)})

let cell_4 = document.getElementById('num-4');
cell_4.addEventListener('click',gameMove);
cell_4.addEventListener('click',()=>{cell_4.setAttribute('style', `background-image: url('./Group 3.png') ;
background-size: 90px 90px;`)})

let cell_5 = document.getElementById('num-5');
cell_5.addEventListener('click',gameMove);
cell_5.addEventListener('click',()=>{cell_5.setAttribute('style', `background-image: url('./Group 3.png') ;
background-size: 90px 90px;`)})

let cell_6 = document.getElementById('num-6');
cell_6.addEventListener('click',gameMove);
cell_6.addEventListener('click',()=>{cell_6.setAttribute('style', `background-image: url('./Group 3.png') ;
background-size: 90px 90px;`)})

let cell_7 = document.getElementById('num-7');
cell_7.addEventListener('click',gameMove);
cell_7.addEventListener('click',()=>{cell_7.setAttribute('style', `background-image: url('./Group 3.png') ;
background-size: 90px 90px;`)})

let cell_8 = document.getElementById('num-8');
cell_8.addEventListener('click',gameMove);
cell_8.addEventListener('click',()=>{cell_8.setAttribute('style', `background-image: url('./Group 3.png') ;
background-size: 90px 90px;`)})

let cell_9 = document.getElementById('num-9');
cell_9.addEventListener('click',gameMove);
cell_9.addEventListener('click',()=>{cell_9.setAttribute('style', `background-image: url('./Group 3.png') ;
background-size: 90px 90px;`)})

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

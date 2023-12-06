let canMove = true;
let words = ['YOUR TURN', 'MY TURN', 'ME WIN', 'YOU WIN'];
let emptyCells = [];

let mainElem = document.getElementById('wrapper');

let container = document.createElement('div');
container.className = 'grid';
mainElem.appendChild(container);

let gameMove = document.createElement('button');
gameMove.innerHTML = words[0];
gameMove.id = 'mainButton';
mainElem.appendChild(gameMove);
gameMove.addEventListener('click', ()=>{botRandom()})



let field = 
{
	cell1 : document.createElement('button'),
	cell2 : document.createElement('button'),
	cell3 : document.createElement('button'),
	
	cell4 : document.createElement('button'),
	cell5 : document.createElement('button'),
	cell6 : document.createElement('button'),
	
	cell7 : document.createElement('button'),
	cell8 : document.createElement('button'),
	cell9 : document.createElement('button'),
}

function addField(container)
{
	for (let key in this)
	{
		container.append(this[key]);
	}
}

function buttonNumerate(obj)
{
	let i = 1;
	for (let key in obj)
	{
		// obj[key].innerHTML = i;
		obj[key].setAttribute('id', `${i}-cell`);
		obj[key].setAttribute('class', `inactive`);
		obj[key].addEventListener('click', ()=>{buttonAction(obj[key])});
		i++;
	}
}

function buttonAction(btn)
{
	let checked = btn.getAttribute('class');
	if(checked == `inactive` && canMove && btn.innerHTML != 'O')
	{
		btn.setAttribute('class',`active`);
        btn.innerHTML = "X";
        gameMove.innerHTML = words[1];
        canMove = false;
    }else if (checked == `active` && !canMove)
	{
		btn.setAttribute('class',`inactive`);
        btn.innerHTML = "";
        gameMove.innerHTML = words[0];
        canMove = true;
	}
}

function findEmpty(fieldObj, arr)
{
    for (const key in fieldObj)
    {
        if(fieldObj[key].innerHTML != 'X' && fieldObj[key].innerHTML != 'O')
        {
            arr.push(key);
        }
    }
    console.log(arr);
    return arr;
}

function chooseEmpty(num)
{
    return Math.floor(Math.random() * num);
}

function botRandom()
{
    if(!canMove)
    {
        let numOfEmpty = findEmpty(field,emptyCells);
        let chosenOneNumber = chooseEmpty(numOfEmpty.length);
        field[numOfEmpty[chosenOneNumber]].innerHTML = 'O';
        canMove = true;
        gameMove.innerHTML = words[0];
        emptyCells = [];
    }
}

buttonNumerate(field);
addField.call(field, container);

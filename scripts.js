let turnNumber = 1;
let button1 = -1;
let button2 = -2;
let button3 = -3;
let button4 = -4;
let button5 = -5;
let button6 = -6;
let button7 = -7;
let button8 = -8;
let button9 = -9;

const firstRow = [button1, button2, button3];
const secondRow = [button4, button5, button6];
const thirdRow = [button7, button8, button9];
const firstCross = [button1, button5, button9];
const secondCross = [button3, button5, button7];
const firstColumn = [button1, button4, button7];
const secondColumn = [button3, button6, button9];

function playGame (buttonNumber, buttonName,){
    document.querySelector(buttonName).addEventListener('click', () => {
        if(turnNumber % 2 === 0 && buttonNumber < 0){
            buttonNumber = 2;
            document.querySelector(buttonName).innerHTML = 'O';
            turnNumber++;
           
        } else if (buttonNumber < 0){
            buttonNumber = 1;
            document.querySelector(buttonName).innerHTML = 'X';
            turnNumber++;
           
        }
        
        console.log(turnNumber);
       
    });
}

playGame(button1, '.js-button-1');
playGame(button2, '.js-button-2');
playGame(button3, '.js-button-3');
playGame(button4, '.js-button-4');
playGame(button5, '.js-button-5');
playGame(button6, '.js-button-6');
playGame(button7, '.js-button-7');
playGame(button8, '.js-button-8');
playGame(button9, '.js-button-9');

function checkWin(array){
    const allEqual = array => array.every( v => v === array[0] )
if (allEqual(array)){
    console.log('Game over')
}
};


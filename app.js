const display = document.querySelector('h1')
const buttons = document.querySelectorAll('button')
const clearBtn = document.querySelector('.clear')
const delBtn = document.querySelector('.del')

//console.log(buttons)

//Variables
let firstValue = 0;  //dori 1st er jei value ta hobe seita 0
let operatorValue = '';   //dori 1st operator in empty ''
let nextInQueue = false;
const calculation = {
      '+' : (firstNumber, secondNumber) => firstNumber + secondNumber,
      '-' : (firstNumber, secondNumber) => firstNumber - secondNumber,
      '*' : (firstNumber, secondNumber) => firstNumber * secondNumber,
      '/' : (firstNumber, secondNumber) => firstNumber / secondNumber,
      '%' : (firstNumber, secondNumber) => secondNumber % firstNumber, 
      '=' : (firstNumber, secondNumber) => secondNumber
}


//Function
function displayItem(item){
   
  
  if(nextInQueue){
        display.textContent = item
        nextInQueue = false
    }
    else {
        let displayValue = display.textContent
       // let displayDecimal = display.textContent

      //running
        display.innerText = displayValue == 0 ? item : displayValue + item  ;
        //display.innerText = displayValue == `${0} ${'.'} ${item}`  ? `0. ${item}` : displayValue.split('.')[1]  + item;
        display.innerText = displayValue == `0 ${'.'} ${item}` ? displayValue.split(0, 0, "0.") : displayValue + item;
      
        console.log(displayValue)
        
    }
    
}

function useOperator(operator){
    const currentValue = Number(display.textContent)
    if(!firstValue){
        firstValue = currentValue;
       
    }
    else{
        //console.log(currentValue)
        const calculate = calculation[operatorValue](firstValue, currentValue)
        display.textContent = calculate
        firstValue = calculate
    }
    // console.log(firstValue)
    // console.log(operator)
   nextInQueue = true
   operatorValue = operator 
}



//running

function addDecimal(){
   
    if(!display.textContent.includes('.')){
        display.textContent = `${display.textContent}.`
    }
}


function delOne(){
    let displayValue = display.textContent
    display.innerText = displayValue == 0 ? 0 : displayValue.slice(0 , -1)
}

function reset(){
    display.textContent = '0';
}

//Event Listeners

buttons.forEach((inputBtn) => {
    if(inputBtn.classList.length == 0){
        inputBtn.addEventListener('click', () => displayItem(inputBtn.value));
    }
    else if(inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    }
    else if(inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click', () => addDecimal());
    }
})

clearBtn.addEventListener('click', reset)
delBtn.addEventListener('click', () => delOne())




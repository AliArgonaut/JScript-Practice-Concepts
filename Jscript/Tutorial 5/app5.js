const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const resultElement = document.getElementById('resultElement');
let age;

mySubmit.onclick = function(){
    age = Number(myText.value);
    
    if (age <= 0){
        resultElement.textContent = 'You are a little baby, how are you typing?!'
    }
    else if (age < 18){
        resultElement.textContent = 'You are too young!'
    }
    else if (age >= 100){
        resultElement.textContent = 'You are too old!'
    }
    else{
        resultElement.textContent = 'You are in the clear!'
    }
    
}

const myCheckboxYes = document.getElementById('myCheckboxYes');
const myCheckboxNo = document.getElementById('myCheckboxNo');
const myRadioResult = document.getElementById('myRadioResult');
const visaBtn = document.getElementById('visaBtn');
const cashappBtn = document.getElementById('cashappBtn');
const venmoBtn = document.getElementById('venmoBtn');
const radioResultParagraph = document.getElementById('radioResultParagraph');


myRadioResult.onclick = function(){
    if (myCheckboxYes.checked && myCheckboxNo.checked){
        radioResultParagraph.textContent = 'I know we give you the option to choose both, but please dont'
    }
    else if (myCheckboxYes.checked){
        if (visaBtn.checked){
            radioResultParagraph.textContent = 'You are honest and you bank with Visa!' 
        }
        else if(cashappBtn.checked){
            radioResultParagraph.textContent = 'You are honest and you bank with Cashapp!' 
        }
        else if(venmoBtn.checked){
            radioResultParagraph.textContent = 'You are honest and you bank with Venmo!' 
        }
        else{
            radioResultParagraph.textContent = 'Please indicate which bank you bank with and try again!'
        }
    }
    else if(myCheckboxNo.checked){
        if (visaBtn.checked){
            radioResultParagraph.textContent = 'You are dishonest, so we will rob your Visa' 
        }
        else if(cashappBtn.checked){
            radioResultParagraph.textContent = 'You are dishonest, so we will rob your Cashapp'
        }
        else if(venmoBtn.checked){
            radioResultParagraph.textContent = 'You are dishonest, so we will rob your Venmo'
        }
        else{
            radioResultParagraph.textContent = 'Please indicate which bank you bank with and try again'
        }

    }
    else{
        radioResultParagraph.textContent = 'what are you doing? answer the first question!'
    }
}

this is messing around with checkboxes and radio buttons, with a focus on if statements

for more if statement facts, look into ternary operator

ex:

let age = 17
let message = age < 18 ? "you are too young" : "you are over 18" 
console.log(message)

this does the same thing as an if statement, in fewer lines. 

there are also switch statements for many cases

let day = 1

switch(day){
    case 1:
        console.log('it is monday');
        break
    case 2:
        console.log(it is tuesday');
        break
    case 3:
        console.log('it is wednesday');
        break
    case 4:
        console.log('it is thursday');
        break
    case 5:
        console.log('it is friday');
        break
    case 6:
        console.log('it is saturday');
        break
    case 7:
        console.log('it is sunday');
        break
    default: 
        console.log(`${day} is not a day`);

}

and here is another example

numbergrade = 95
lettergrade; 

switch(true){
    case numbergrade >= 90:
        lettergrade = 'A'; 
        break
    
    case numbergrade >= 80:
        lettergrade = 'B';
        break
    
    case numbergrade >= 70:
        lettergrade = 'C';
        break
    
    case numbergrade >= 60:
        lettergrade = 'A';
        break
    
    default:
        lettergrade = 'F';
        break
    
}

console.log(lettergrade)
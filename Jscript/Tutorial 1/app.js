let username;
let age; 

document.getElementById('namesubmit').onclick = function(){
    username = document.getElementById('mytext').value;
    document.getElementById('welcome').textContent = `Hello ${username}!`;
}


document.getElementById('agesubmit').onclick = function(){
    age = document.getElementById('ageinput').value;
    age = Number(age);
    age += 5;
    document.getElementById('agemath').textContent = `In 5 years you will be ${age}`;
}


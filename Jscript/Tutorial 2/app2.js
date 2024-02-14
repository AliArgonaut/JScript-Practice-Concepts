const pi = 3.14159;
let radius;
let circumference;

document.getElementById('SubmitRadius').onclick = function(){
    radius = document.getElementById('RadiusText').value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById('ResultsParagraph').textContent = `The Circumference of a circle with radius ${radius} is ${circumference} units squared`;
}
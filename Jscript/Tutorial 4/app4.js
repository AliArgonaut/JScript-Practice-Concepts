let minval = document.getElementById('min');
let maxval = document.getElementById('max');
let product = document.getElementById('product');
const submitminmax = document.getElementById('submitminmax');
let workingresult = 0; 

submitminmax.onclick = function() {
    let min = Number(minval.value);
    let max = Number(maxval.value);
    workingresult = Math.floor(Math.random() * ((max + 1) - min)) + min;        
    product.textContent = workingresult;
}

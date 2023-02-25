let btn = document.getElementById('btn');
btn.addEventListener('click',showbg);
console.log(element);

function showbg() { 
    let label = document.getElementById('label');
    console.log('este es el label', label);
    label.classList.add('bg-changed');
}
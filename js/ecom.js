const image = document.querySelector('#main-image>img');
const colors = document.querySelectorAll('input[name="colorSelect"]');
let checkedColor = document.querySelector('input[name="colorSelect"]:checked');

colors.forEach(function (el, i) {
    el.addEventListener('change', changeColor);
});

function changeColor() {
    checkedColor = document.querySelector('input[name="colorSelect"]:checked');
    image.src = checkedColor.value;
    
}

changeColor();
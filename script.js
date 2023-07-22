let maker = document.querySelector('#indicator');
let nav = document.querySelector('.nav');
let item = document.querySelectorAll('.nav a');

nav.onclick = function () {
    maker.classList.toggle('change');

}
function indicator(e) {
    maker.style.left = e.offsetLeft + 'px';
    maker.style.width = e.offsetWidth + 'px';
    maker.style.display = 'block';
    maker.style.filter = 'hue-rotate(' + Math.random() * 360 + 'deg)';

}
item.forEach(link => {
    link.onclick = (e) => {
        indicator(e.target);
        console.log(e.target);

    }
})

function addClassList() {
    item.forEach((i) =>
        i.classList.remove('active'));
    this.classList.add('active');

}
item.forEach((i)=>
i.addEventListener('click',addClassList)
)

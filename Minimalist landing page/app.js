const pag = document.querySelectorAll('.pag');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const img = document.querySelector('.slider-img');
const overlay = document.querySelector('.overlay');
const anim = document.querySelectorAll('.anim');

const r = document.querySelector(':root');
const rs = getComputedStyle(r);

let id = 0;

const images = [
    './images/simone-hutsch-QXBJ1G3DEWQ-unsplash.jpg',
    './images/warren-wong-9FdMgHz6bbM-unsplash.jpg',
    './images/simone-hutsch-bh2BuKhQelU-unsplash.jpg',
    './images/kaloyan-draganov-5SCtL4n5Ppc-unsplash.jpg',
    './images/simone-hutsch-HcpWRXhqdlQ-unsplash.jpg'
]

const colors = [
    '#feb57b',
    '#ffa901',
    '#b5162e',
    '#27223f',
    '#468cc2'
]

function retrigAnim() {
    for(let i = 0; i < anim.length; i++) {
        anim[i].style.animation = 'none';
        anim[i].offsetHeight;
        anim[i].style.animation = null;
    }
}

function slider(i) {
    retrigAnim();
    img.src = images[i]; 
    r.style.setProperty('--accent', colors[i]);
    for(let i = 0; i < pag.length; i++) {
        pag[i].classList.remove('active');
    }
    pag[i].classList.add('active');
}

for(let i = 0; i < pag.length; i++) {
    pag[i].addEventListener('click', () => {
        slider(i);
        id = i;
        stopAutoSlide()
    });
}

prev.addEventListener('click', () => {
    id--;
    if(id < 0) {
        id = pag.length - 1;
    }

    slider(id);
    stopAutoSlide();
});

next.addEventListener('click', () =>{
    nextSlide();
    stopAutoSlide();
});

function nextSlide() {
    id++;
    if (id > pag.length - 1) {
        id = 0;
    }
    slider(id);
}

let autoSlide = setInterval(nextSlide, 5000);

function stopAutoSlide() {
    clearInterval(autoSlide);

    autoSlide = setInterval(nextSlide, 5000);
}
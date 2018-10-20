// SLIDER

const headerSlide = document.getElementById('header');
const dots = document.getElementsByClassName('dot');
let index = 0;

function currentSlide(i) {
  Array.from(dots).forEach((item) => {
    item.classList.remove('active-dot');
  });
  headerSlide.style.backgroundImage = `url(img/bg-head${i}.jpg)`;
  dots[i].classList.add('active-dot');
  console.log(i);
  index = i;
}

function autoSlide() {
  if(index > 3) {
    index = 0;
  }
  Array.from(dots).forEach((item) => {
    item.classList.remove('active-dot');
  });
  headerSlide.style.backgroundImage = `url(img/bg-head${index}.jpg)`;
  dots[index].classList.add('active-dot');
  index++;
  setTimeout(autoSlide, 7500);
}
autoSlide();

let images = new Array()
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image()
    images[i].src = preload.arguments[i]
  }
}
preload(
  'https://castchise.github.io/tajam/img/bg-head1.jpg',
  'https://castchise.github.io/tajam/img/bg-head2.jpg',
  'https://castchise.github.io/tajam/img/bg-head3.jpg',
)


// MODAL

const modal = document.querySelector('.modal');
const btn = document.querySelector('.video-banner');
const modalCls = document.querySelector('.modal-cls');
const video = document.querySelector('#videoframe');

btn.addEventListener('click', function(e) {
  video.setAttribute('src', 'https://www.youtube.com/embed/ffePfl-Ew_c?controls=0&autoplay=1');
  modal.style.visibility = 'visible';
  modal.style.opacity = '1';
  e.preventDefault();
});

modalCls.addEventListener('click', function(e) {
  modal.style.visibility = 'hidden';
  modal.style.opacity = '0';
  video.setAttribute('src', '');
  e.preventDefault();
});

window.addEventListener('click', function(e) {
 if(e.target === modal) {
  modal.style.visibility = 'hidden';
  modal.style.opacity = '0';
  video.setAttribute('src', '');
 }
});

// GRID

const itemsArr = document.getElementsByClassName('grid-item');
const loadBtn = document.getElementById('load-more');
let loadFlag = true;

loadBtn.addEventListener('click', function() {
  if (loadFlag === true) {
    loadFlag = false;
    for(let i = 0; i < itemsArr.length; i++) {
      if (i >= 10) {
        itemsArr[i].style.maxHeight = '100%';
      }
    }
    loadBtn.innerHTML = 'Show Less';
  } else {
    loadFlag = true;
    for(let i = 0; i < itemsArr.length; i++) {
      if (i >= 10) {
        itemsArr[i].style.maxHeight = '0';
      }
    }
    loadBtn.innerHTML = 'Load More';
  }
});

// STATES CAROUSEL
const statesSlides = document.getElementsByClassName('state-slide');
const statesNav = document.getElementsByClassName('stateNav');

let statesIndex = 2; // carousel starts at 2nd slide

document.getElementById('slideNavPrev').addEventListener('click', statePrev);
document.getElementById('slideNavNext').addEventListener('click', stateNext);

function stateNext() {
  statesSlides[statesIndex].style.left = '-100%';
  statesNav[statesIndex].classList.remove('activeNav');
  if (statesSlides[statesIndex+1] === undefined) {
    for (let i = 1; i < statesSlides.length; i++) {
      statesSlides[i].style.left = '100%';
    }
    statesIndex = 0;
    statesSlides[statesIndex].style.left = '0%';
    statesNav[statesIndex].classList.add('activeNav');
  } else {
    statesSlides[statesIndex+1].style.left = '0%';
    statesNav[statesIndex+1].classList.add('activeNav');
    statesIndex ++;
  }
}
function statePrev() {
  statesSlides[statesIndex].style.left = '100%';
  statesNav[statesIndex].classList.remove('activeNav');
  if(statesSlides[statesIndex-1] === undefined) {
    for (let i = 0; i < statesSlides.length-1; i++) {
      statesSlides[i].style.left = '-100%';
    }
    statesIndex = 4;
    statesSlides[statesIndex].style.left = '0%';
    statesNav[statesIndex].classList.add('activeNav');
  } else {
    statesSlides[statesIndex-1].style.left = '0%';
    statesNav[statesIndex-1].classList.add('activeNav');
    statesIndex --;
  }
}

function setStateSlide(n){
  statesNav[statesIndex].classList.remove('activeNav');
  if (n < 2) {
    statesSlides[statesIndex].style.left = '100%';
  } else {
    statesSlides[statesIndex].style.left = '-100%';
  }
  statesSlides[n].style.left = '0%';
  statesNav[n].classList.add('activeNav');
  statesIndex = n;
}

// ANCHORS

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
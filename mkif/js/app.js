const nav = document.getElementById('nav-menu'),
      navAccess = document.getElementById('nav-access'),
      scroll = document.querySelector('.scroll'),
      underMain = document.querySelector('.under-main');

navAccess.addEventListener('click', (e) => {
  if(nav.className === 'open') {
    scroll.style.display = 'block';
    underMain.style.display = 'block';
    nav.classList.remove('open');
    navAccess.style.padding = '5px 13px';
    navAccess.innerHTML = '<i class="fas fa-bars"></i>';
  } else {
    scroll.style.display = 'none';
    underMain.style.display = 'none';
    nav.classList.add('open');
    navAccess.style.padding = '5px 15px';
    navAccess.innerHTML = '<i class="fas fa-times"></i>';
  }
});


$(document).ready(function(){
  $('.slider-container').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 1
  });
  $('.modal-slider-container').find('.slick-slide').on('click', () => {
    $('.modal-slider-container').slick('slickNext');
  });
  $('.modal-slider-container').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 1
  });
});


const sliderModal = document.getElementById('sliderModal'),
      img = document.getElementsByClassName('showcaseSlide')
      imgModal = document.getElementById('sliderImgModal');

for (let i = 0; i < img.length; i++) {
  img[i].onclick = function() {
    sliderModal.style.display = 'block';
    imgModal.src = this.src;
  }
  imgModal.onclick = function() {
    if (i === (img.length-1)) {
      i = 0;
      imgModal.src = img[i++].src;
    } else {
      imgModal.src = img[i++].src;
    }
  }
}

// lightbox

window.onclick = function(e) {
  if (e.target === document.getElementById('gridModal')) {
    document.getElementById('gridModal').style.display = 'none';
  } 
  if (e.target === document.getElementById('sliderModal')) {
    document.getElementById('sliderModal').style.display = 'none';
  }
}

document.querySelector('.grid-wrapper').addEventListener('click', function(e) {
  if (e.target.tagName.toLowerCase() === 'img') {
    document.getElementById('gridModal').style.display = 'block';
  }
});

function closeModal() {
  document.getElementById('gridModal').style.display = 'none';
  document.getElementById('sliderModal').style.display = 'none';
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gridSlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
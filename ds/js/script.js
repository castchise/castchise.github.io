$(document).ready(function(){
    $("#horizontal").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

$(document).ready(function(){
    $("#mobile").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

function closeMenu(){
  menu = document.getElementById('mobile-nav');
  console.log(menu);

  return menu.style.top = '-100%';
}

function openMenu(){
  menu = document.getElementById('mobile-nav');
  console.log(menu);

  return menu.style.top = '0%';
}

window.onscroll = function() {stickMenu()};
var menuLink = document.getElementById('toggle-contain');
var stickyBar = menuLink.offsetTop;

function stickMenu(){
  if (window.pageYOffset >= stickyBar){
    menuLink.classList.add('sticky')
  } else {
    menuLink.classList.remove('sticky');
  }
}
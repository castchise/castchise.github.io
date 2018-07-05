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

document.getElementById('remastered-slides').onmousemove = function(event){
  var x = event.offsetX; //относительно родителя
  console.log(x);
  document.getElementById('new').style.width = x + 'px';
}

document.getElementById('remastered-slides').onmouseleave = function(event){
  document.getElementById('new').style.width = '50%';
  document.getElementById('new').style.transition = "ease .2s";﻿
}
// desktopAnchorScroll
$(document).ready(function(){
    $("#horizontal").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});
// mobileAnchorScroll
$(document).ready(function(){
    $("#mobile").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});
// mobileStickyMenu
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
// mobileMenuControls
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
// document.getElementById('remastered-slides').onmousemove = function(event){
//   var x = event.offsetX; //относительно родителя
//   console.log(x);
//   document.getElementById('new').style.width = x + 'px';
// }

// document.getElementById('remastered-slides').onmouseleave = function(event){
//   document.getElementById('new').style.width = '50%';
//   document.getElementById('new').style.transition = "ease .2s";﻿
// }


// function slideCompar(){
//   var slideContainers = document.getElementsByClassName('remastered-slides');
//   var newPics = document.getElementsByClassName('new');
//   console.log(newPics);

//   for( i = 0; i<slideContainers.length; i++){
//     slideContainers[i].onmousemove = function(event){
//       var x = event.offsetX;
//       // console.log(x);
//       for ( i = 0; i<newPics.length; i++){
//         newPics[i].style.width = x + 'px';
//       }
//     }
//   }
// }

function slideCompar(x){
  var offset = event.offsetX;
  // console.log(offset);

  var contain = $(x).find('.new');
  contain[0].style.width = offset + 'px';
}

function slideComparDefault(x){
  var contain = $(x).find('.new');
  contain[0].style.width = '50%';
  contain[0].style.transition = 'ease .2s';
}


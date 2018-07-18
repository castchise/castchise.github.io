$(document).ready(function(){
    // desktopAnchorScroll
    $('#horizontal').on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    // mobileAnchorScroll
    $('#mobile').on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    // trigger animation @ viewport; viewport JQ plug-in
    ;(function($, win) {
      $.fn.inViewport = function(cb) {
         return this.each(function(i,el){
           function visPx(){
             var H = $(this).height(),
                 r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
             return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
           } visPx();
           $(win).on("resize scroll", visPx);
         });
      };
    }(jQuery, window));

    // detect one-of-3 paragrphs and init animations
    $('.story-pic').inViewport(function(vis){
      if(vis) $(this).addClass('anim-1');
    });
    $('.story-p-2').inViewport(function(vis){
      if(vis) $(this).addClass('anim-2');
    });
    $('.story-p-3').inViewport(function(vis){
      if(vis) $(this).addClass('anim-3');
    });
});
// ---------------------------------------------------------
// ONSCROLL: STICKY MENU + BG APPEARANCE
// ---------------------------------------------------------

window.onscroll = function(){
  // stickyMenu init
  stickMenu();
  // bg appearance
  var bgWrap = document.getElementById('bgwrap');
  if(pageYOffset >= 850){
    bgWrap.style.background = 'rgba(0,0,0,.1)';
  } else if (pageYOffset <= 850){
    bgWrap.style.background = 'rgba(0,0,0,1)';
  }
};
// mobileStickyMenu
var menuLink = document.getElementById('toggle-contain');
var stickyBar = menuLink.offsetTop;

function stickMenu(){
  if (window.pageYOffset >= stickyBar){
    menuLink.classList.add('sticky')
  } else {
    menuLink.classList.remove('sticky');
  }
}

// ---------------------------------------------------------
// mobileMenuControls
// ---------------------------------------------------------

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

// ---------------------------------------------------------
// new version of slideComparsion
// ---------------------------------------------------------

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

// ---------------------------------------------------------
// OLD VERSION OF slideCompar
// ---------------------------------------------------------

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



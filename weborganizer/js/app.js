// Expand & Collapse sections

Array.from(document.getElementsByClassName('headbar')).forEach(item => {
  item.addEventListener('click', expandSec);
});

function expandSec() {
  if (getComputedStyle(this.nextElementSibling).visibility === 'visible') {    
    Array.from(this.children).forEach(item => {
      Array.from(item.children).forEach(item => {
        if (item.classList.contains('fa-minus')){
          this.nextElementSibling.style.opacity = '0';
          this.nextElementSibling.style.maxHeight = '0';
          this.nextElementSibling.style.padding = '0';
          this.nextElementSibling.style.visibility = 'hidden';
          this.nextElementSibling.style.borderBottom = 'none';
          item.classList.remove('fa-minus');
          item.classList.add('fa-plus');
        }
      }); 
    });
  } else {
    this.nextElementSibling.style.opacity = '1';
    this.nextElementSibling.style.maxHeight = 'none';
    this.nextElementSibling.style.padding = '10px';
    this.nextElementSibling.style.visibility = 'visible';
    this.nextElementSibling.style.borderBottom = '1px solid #2C3E50';
    this.lastElementChild.children[0].classList.add('fa-minus');
    this.lastElementChild.children[0].classList.remove('fa-plus');
  }
}

// Modal manipulations

function modalOpen(x) {
  const loadWrap = document.getElementById('loader-wrap');
  const app = document.getElementById('app');

  app.style.filter = 'blur(5px)';
  loadWrap.classList.remove('loaded');
  setTimeout(() => {
    document.getElementById(x).style.zIndex = '999';
    document.getElementById(x).style.visibility = 'visible';
    document.getElementById(x).style.opacity = '1';
  }, 250);
}

document.getElementById('modalGeo').addEventListener('click', modalClose);
document.getElementById('modalCurr').addEventListener('click', modalClose);

function modalClose(e) {
  const loadWrap = document.getElementById('loader-wrap');
  const app = document.getElementById('app');

  app.style.filter = 'blur(3px)';
  loadWrap.classList.remove('loaded');

  if(e.target.classList.contains('cls')) {
    const modal = e.target.parentElement.parentElement;
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
    modal.style.zIndex = '-1';

    loadWrap.classList.add('loaded');
    app.style.filter = 'none';
    
  } else if (e.target.classList.contains('fa-times')) {
    const modal = e.target.parentElement.parentElement.parentElement;
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
    modal.style.zIndex = '-1';

    loadWrap.classList.add('loaded');
    app.style.filter = 'none';
  }
}

// close when clicked outside

document.getElementById('loader-wrap').onclick = function () {
  const loadWrap = document.getElementById('loader-wrap');
  const app = document.getElementById('app');

  Array.from(this.parentElement.children).forEach((item) => {
    // console.log();
    if (item.id === 'modalIntro') {
      return true;
    } else if (item.classList.contains('modal')) {
      item.style.visibility = 'hidden';
      item.style.opacity = '0';
      item.style.zIndex = '-1';

      loadWrap.classList.add('loaded');
      app.style.filter = 'none';
    }
  });
}



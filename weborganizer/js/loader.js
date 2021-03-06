document.addEventListener('DOMContentLoaded', initLoad);

function initLoad() {
  setTimeout(loader, 500);
}

function loader() {
  const loadText = document.querySelector('.load-txt');
  const loadTextUnder = document.querySelector('.load-txt-under');
  loadText.style.opacity = '1';
  loadText.style.transform = 'translateY(0%)';
  

  const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve();
      loadTextUnder.style.opacity = '1';
      setTimeout(() => {
        document.querySelector('.load-strip').style.width = '100%';
      }, 750);
    }, 2000);
  });
  promise
    .then(
      result => setTimeout(loaded, 4000),
      error => console.log(error)
    );
}

function loaded() {
  
  const loadWrap = document.getElementById('loader-wrap');
  const loadTxt = document.querySelector('#loader');
  loadWrap.className = 'loaded';
  loadTxt.classList.add('loaded');
  setTimeout(function() {
    document.querySelector('.app-wrap').classList.remove('loaded');
  }, 1500);
}

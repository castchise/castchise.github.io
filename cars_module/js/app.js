let switcher = document.getElementsByClassName('switcher'),
    options = document.getElementsByClassName('opt-link'),
    altOptions = document.getElementsByClassName('alt-opt-link'),
    selector = document.querySelector('.select'),
    carPreview = document.querySelector('.preview'),
    optionsLink = document.querySelector('.optToggle'),
    partsList = document.getElementsByClassName('parts-list'),
    standartppp = document.querySelector('.three'),
    standartpp = document.querySelector('.two'),
    standartp = document.querySelector('.one'),
    standart = document.querySelector('.none'),
    minimal = document.querySelector('.min'),
    price = document.getElementById('price-calced');

console.log(standartppp);

window.onload = function() {
  selector.style.marginLeft = '45%';
}

for (let i = 0; i < switcher.length; i++) {
  switcher[i].onclick = function(e){
    if (e.target === switcher[0] || e.target === switcher[1]){
      selector.style.marginLeft = '45%';
      carPreview.src = 'img/citroen/stand++.jpg';
      price.innerHTML = '7000 руб.';
      for (let i = 0; i < options.length; i++){
        options[i].classList.remove('options-hovered');
      }
      options[3].classList.add('options-hovered');
      document.querySelector('.altOpt').classList.remove('show');
      optionsLink.classList.remove('options-toggled');
      optionsLink.classList.add('options-toggle');
    }
    else if (e.target === switcher[2] || e.target === switcher[3]){
      selector.style.marginLeft = '150%';
      carPreview.src = 'img/mazda/stand++.jpg';
      price.innerHTML = '11500 руб.';
      for (let i = 0; i < options.length; i++){
        options[i].classList.remove('options-hovered');
      }
      options[3].classList.add('options-hovered');
      document.querySelector('.altOpt').classList.remove('show');
      optionsLink.classList.remove('options-toggled');
      optionsLink.classList.add('options-toggle');
    }
    else if (e.target === switcher[4] || e.target === switcher[5]){
      selector.style.marginLeft = '250%';
      carPreview.src = 'img/mercedes/stand++.jpg';
      price.innerHTML = '13500 руб.';
      for (let i = 0; i < options.length; i++){
        options[i].classList.remove('options-hovered');
      }
      options[3].classList.add('options-hovered');
      document.querySelector('.altOpt').classList.remove('show');
      optionsLink.classList.remove('options-toggled');
      optionsLink.classList.add('options-toggle');
    }
  }
}

optionsLink.onclick = function() {
  if (this.classList.contains('options-toggled')){
    this.classList.remove('options-toggled');
    this.classList.add('options-toggle');
  } else {
    this.classList.add('options-toggled');
    this.classList.remove('options-toggle');
  }
  document.querySelector('.altOpt').classList.toggle('show');
}


for (let i = 0; i < options.length; i++) {
  options[i].onclick = function() {
    for (let j = 0; j < options.length; j++){
      options[j].classList.remove('options-hovered');
    }
    this.classList.add('options-hovered');

    let att = this.getAttribute('data-main'),
        selectorStyle = selector.style.marginLeft;

    // parts-details cases

    for (let i = 0; i < partsList.length; i++){
      partsList[i].style.display = 'none';
    }

    if (att === 'standart+++') {
      standartppp.style.display = 'block';
    } else if ( att === 'standart++' ) {
      standartpp.style.display = 'block';
    } else if ( att === 'standart+' ) {
      standartp.style.display = 'block';
    } else if ( att === 'standart' ) {
      standart.style.display = 'block';
    } else if ( att === 'minimal' ) {
      minimal.style.display = 'block';
    }

    // citroen cases
    if (att === 'minimal' && selectorStyle === '45%'){
      carPreview.src = 'img/citroen/min.jpg';
      price.innerHTML = '1500 руб.';
    } else if (att === 'standart' && selectorStyle === '45%'){
      carPreview.src = 'img/citroen/stand.jpg';
      price.innerHTML = '2500 руб.';
    } else if (att === 'standart+' && selectorStyle === '45%'){
      carPreview.src = 'img/citroen/stand+.jpg';
      price.innerHTML = '5000 руб.';
    } else if (att === 'standart++' && selectorStyle === '45%'){
      carPreview.src = 'img/citroen/stand++.jpg';
      price.innerHTML = '7000 руб.';
    } else if (att === 'standart+++' && selectorStyle === '45%'){
      carPreview.src = 'img/citroen/stand+++.jpg';
      price.innerHTML = '10500 руб.';
    } else if (att === 'whole' && selectorStyle === '45%'){
      carPreview.src = 'img/citroen/whole.jpg';
      price.innerHTML = '13500 руб.';
    }
    // mazda cases
    if (att === 'minimal' && selectorStyle === '150%'){
      carPreview.src = 'img/mazda/min.jpg';
      price.innerHTML = '5500 руб.';
    } else if (att === 'standart' && selectorStyle === '150%'){
      carPreview.src = 'img/mazda/stand.jpg';
      price.innerHTML = '7500 руб.';
    } else if (att === 'standart+' && selectorStyle === '150%'){
      carPreview.src = 'img/mazda/stand+.jpg';
      price.innerHTML = '9500 руб.';
    } else if (att === 'standart++' && selectorStyle === '150%'){
      carPreview.src = 'img/mazda/stand++.jpg';
      price.innerHTML = '11500 руб.';
    } else if (att === 'standart+++' && selectorStyle === '150%'){
      carPreview.src = 'img/mazda/stand+++.jpg';
      price.innerHTML = '13500 руб.';
    } else if (att === 'whole' && selectorStyle === '150%'){
      carPreview.src = 'img/mazda/whole.jpg';
      price.innerHTML = '18500 руб.';
    }
    // mercedes cases
    if (att === 'minimal' && selectorStyle === '250%'){
      carPreview.src = 'img/mercedes/min.jpg';
      price.innerHTML = '7000 руб.';
    } else if (att === 'standart' && selectorStyle === '250%'){
      carPreview.src = 'img/mercedes/stand.jpg';
      price.innerHTML = '8500 руб.';
    } else if (att === 'standart+' && selectorStyle === '250%'){
      carPreview.src = 'img/mercedes/stand+.jpg';
      price.innerHTML = '10000 руб.';
    } else if (att === 'standart++' && selectorStyle === '250%'){
      carPreview.src = 'img/mercedes/stand++.jpg';
      price.innerHTML = '13500 руб.';
    } else if (att === 'standart+++' && selectorStyle === '250%'){
      carPreview.src = 'img/mercedes/stand+++.jpg';
      price.innerHTML = '15500 руб.';
    } else if (att === 'whole' && selectorStyle === '250%'){
      carPreview.src = 'img/mercedes/whole.jpg';
      price.innerHTML = '20500 руб.';
    }
  }
}

for (let i = 0; i < altOptions.length; i++) {
  altOptions[i].onclick = function() {
    for (let j = 0; j < altOptions.length; j++){
      altOptions[j].classList.remove('options-hovered');
    }
    this.classList.add('options-hovered');

    let att = this.getAttribute('data-main'),
        selectorStyle = selector.style.marginLeft;
    
    // citroen sub-cases
    if (att === 'optics' && selectorStyle === '45%'){
      carPreview.src = 'img/citroen/optics.jpg';
      price.innerHTML = '500 руб.';
    } else if (att === 'inner' && selectorStyle === '45%'){
      carPreview.src = 'img/citroen/inner.jpg';
      price.innerHTML = '250 руб.';
    } else if (att === 'outer' && selectorStyle === '45%'){
      carPreview.src = 'img/citroen/outer.jpg';
      price.innerHTML = '370 руб.';
    } else if (att === 'doors' && selectorStyle === '45%'){
      carPreview.src = 'img/citroen/doors.jpg';
      price.innerHTML = '600 руб.';
    } else if (att === 'rears' && selectorStyle === '45%'){
      carPreview.src = 'img/citroen/rears.jpg';
      price.innerHTML = '450 руб.';
    } else if (att === 'hood' && selectorStyle === '45%'){
      carPreview.src = 'img/citroen/hood.jpg';
      price.innerHTML = '550 руб.';
    } else if (att === 'fbump' && selectorStyle === '45%'){
      carPreview.src = 'img/citroen/fbump.jpg';
      price.innerHTML = '355 руб.';
    } else if (att === 'rbump' && selectorStyle === '45%'){
      carPreview.src = 'img/citroen/rbump.jpg';
      price.innerHTML = '340 руб.';
    }
    // mazda sub-cases
    if (att === 'optics' && selectorStyle === '150%'){
      carPreview.src = 'img/mazda/optics.jpg';
      price.innerHTML = '750 руб.';
    } else if (att === 'inner' && selectorStyle === '150%'){
      carPreview.src = 'img/mazda/inner.jpg';
      price.innerHTML = '300 руб.';
    } else if (att === 'outer' && selectorStyle === '150%'){
      carPreview.src = 'img/mazda/outer.jpg';
      price.innerHTML = '400 руб.';
    } else if (att === 'doors' && selectorStyle === '150%'){
      carPreview.src = 'img/mazda/doors.jpg';
      price.innerHTML = '550 руб.';
    } else if (att === 'rears' && selectorStyle === '150%'){
      carPreview.src = 'img/mazda/rears.jpg';
      price.innerHTML = '535 руб.';
    } else if (att === 'hood' && selectorStyle === '150%'){
      carPreview.src = 'img/mazda/hood.jpg';
      price.innerHTML = '800 руб.';
    } else if (att === 'fbump' && selectorStyle === '150%'){
      carPreview.src = 'img/mazda/fbump.jpg';
      price.innerHTML = '660 руб.';
    } else if (att === 'rbump' && selectorStyle === '150%'){
      carPreview.src = 'img/mazda/rbump.jpg';
      price.innerHTML = '600 руб.';
    }
    // mercedes sub-cases
    if (att === 'optics' && selectorStyle === '250%'){
      carPreview.src = 'img/mercedes/optics.jpg';
      price.innerHTML = '850 руб.';
    } else if (att === 'inner' && selectorStyle === '250%'){
      carPreview.src = 'img/mercedes/inner.jpg';
      price.innerHTML = '500 руб.';
    } else if (att === 'outer' && selectorStyle === '250%'){
      carPreview.src = 'img/mercedes/outer.jpg';
      price.innerHTML = '630 руб.';
    } else if (att === 'doors' && selectorStyle === '250%'){
      carPreview.src = 'img/mercedes/doors.jpg';
      price.innerHTML = '680 руб.';
    } else if (att === 'rears' && selectorStyle === '250%'){
      carPreview.src = 'img/mercedes/rears.jpg';
      price.innerHTML = '637 руб.';
    } else if (att === 'hood' && selectorStyle === '250%'){
      carPreview.src = 'img/mercedes/hood.jpg';
      price.innerHTML = '900 руб.';
    } else if (att === 'fbump' && selectorStyle === '250%'){
      carPreview.src = 'img/mercedes/fbump.jpg';
      price.innerHTML = '760 руб.';
    } else if (att === 'rbump' && selectorStyle === '250%'){
      carPreview.src = 'img/mercedes/rbump.jpg';
      price.innerHTML = '700 руб.';
    }
  }
}
// Expand & Collapse sections

document.getElementById('app').addEventListener('click', expandApp);

function expandApp(e) {
  const expand = e.target.parentElement;
  const content = expand.parentElement.nextElementSibling;
  if(expand.classList.contains('expand-btn')) {
    // console.log(expand.children[0].classList.contains('fa-minus'));
    if (expand.children[0].classList.contains('fa-minus')) {
      content.style.opacity = '0';
      content.style.maxHeight = '0';
      content.style.padding = '0';
      expand.children[0].classList.remove('fa-minus');
      expand.children[0].classList.add('fa-plus');

    } else {
      content.style.opacity = '1';
      content.style.maxHeight = 'none';
      content.style.padding = '10px';
      expand.children[0].classList.add('fa-minus');
      expand.children[0].classList.remove('fa-plus');
    }
  }
}
// EVENT LISTENERS
document.getElementById('night').addEventListener('click', nightMode);
document.getElementById('currency').addEventListener('click', changeCurrency);
document.getElementById('location').addEventListener('click', changeLocation);



let flag = true;
function nightMode() {
  if (flag === true) {
    document.body.style.background = '#1c2d40';
    Array.from(document.getElementsByClassName('headbar')).forEach(item => {
      item.style.background = '#5a7b9c';
    });
    Array.from(document.getElementsByClassName('app-container')).forEach(item => {
      item.style.background = '#2d3943';
      item.style.color = '#fff';
    });
    return flag = false;
  } else {
    document.body.style.background = '#fdfdfd';
    Array.from(document.getElementsByClassName('headbar')).forEach(item => {
      item.style.background = '#2C3E50';
    });
    Array.from(document.getElementsByClassName('app-container')).forEach(item => {
      item.style.background = '#ecf0f1';
      item.style.color = '#000';
    });
    return flag = true;
  }
}

function changeCurrency() {
  console.log('currency');
}

function changeLocation() {
  console.log('location');
}
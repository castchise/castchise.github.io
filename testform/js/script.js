"use strict";

let flag = false; // bool flag for form validation checking

const firstName = document.getElementById('firstname'),
      lastName = document.getElementById('lastname'),
      email = document.getElementById('email'),
      gender = document.getElementById('gender'),
      pass = document.getElementById('password'),
      checker = document.getElementById('checker');

const register = document.getElementById('reg-form');

register.addEventListener('submit', submitData);

function submitData(e) {
  checkIfEmpty(firstName.value, lastName.value, email.value, pass.value, checker); // check fields -> change flag state if all of them are filled
  
  
  if (flag) {
    document.querySelector('#loader').style.display = 'block';
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://codeit.pro/codeitCandidates/serverFrontendTest/user/registration', true);
    xhr.send(new FormData(register));
    console.log(new FormData(register));
    xhr.onreadystatechange = function() {
      if(xhr.status === 200 && xhr.readyState === 4) {
        document.querySelector('#loader').style.display = 'none';
        let response = JSON.parse(xhr.responseText);
        console.log(response);
        if(response.message !== 'User created') {
          alertBox(`${response.message}`, `error`);
        } else {
          alertBox(`${response.message}`, `succ`);
          setTimeout(function() {
            window.location.replace('cp.html');
          }, 2000);
        }
      } else if (xhr.status !== 200) {
        console.log(`Error ${xhr.status} - ${xhr.statusText}`);
      }
    }

  }

  e.preventDefault();
}

// alert box message template
function alertBox(msg, className) {
  clearAlert();
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(msg));

  const card = document.querySelector('.card');
  const form = document.querySelector('#reg-form');
  card.insertBefore(div, form);

  setTimeout(function() { // clear alert box message in 3 sec
    this.clearAlert();
  }, 3000);
}

function clearAlert() {
  const currenAlert = document.querySelector('.alert');
  if(currenAlert) {
    currenAlert.remove();
  }
}

// highlighted field template
function errorFocus(field){
  field.classList.add('error-focus');

  setTimeout(function() {
    field.classList.remove('error-focus');
  }, 2000);
}

function checkIfEmpty(name, lastname, email, pw, cond) {
  if(name === '' || lastname === '' || email === '' || pw === '') {
    alertBox(`Please, fill all fields`, `error`);
    flag = false;
  } else if (cond.checked !== true) {
    alertBox(`agree with the terms`, `error`);
    flag = false;
  } else if (/\d/.test(name) || /\d/.test(lastname)) {
    alertBox(`Please, enter correct name/lastname`, `error`);
    flag = false;
  } else {
    console.log('all fields are filled and checkbox pressed');
    flag = true;
  }
}
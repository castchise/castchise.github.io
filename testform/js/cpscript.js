"use strict";
fillList();

function fillList() {
  document.querySelectorAll('.cp-loader').forEach(item => {
    item.style.display = 'block';
  });
  let xhr = new XMLHttpRequest;
  xhr.open('GET', 'https://codeit.pro/codeitCandidates/serverFrontendTest/company/getList', true);
  setTimeout(() => { xhr.send(); }, 1000); // timeout just for preloader example
  xhr.onreadystatechange = function() {
    let out = '';
    if(xhr.status === 200 && xhr.readyState === 4){
      document.querySelectorAll('.cp-loader').forEach(item => {
        item.style.display = 'none';
      });

      const response = JSON.parse(xhr.responseText);

      let i = 0;
      const counter = setInterval(() => {
        if (i < response.list.length) {
          document.querySelector('#company-count').innerHTML = ++i;
        } else {
          clearInterval(counter);
        }
      }, 3000 / 250);

      response.list.forEach(item => {
        // console.log(item);
        out += `<div class="company">${item.name}</div>`;
      });

      document.querySelector('.companies-container').innerHTML = out;

      document.querySelectorAll('.company').forEach(item => {
        item.addEventListener('click', function() {
          let out = '';
          response.list.forEach(company => {
            if(this.innerHTML === company.name) {
              // console.log(company);
              company.partners.forEach(partner => {
                out += `
                  <div class="partner">
                    <div class="partner-info">
                      <div class="name">${partner.name}</div>
                      <div class="value">${partner.value}%</div>
                    </div>
                  </div>
                `;
                // console.log(partner);
              });
              document.querySelector('.row.hidden').style.display = 'block';
              document.querySelector('.partners-container').innerHTML = out;
            }
          });
        });
      });
    }
  }
}
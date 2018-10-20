const CHART = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];
const COLORS = ['one', 'two', 'three'];
const CONTAINER = document.getElementById('container');
// const TROW = 'tr';
// const TDATA = 'td';


// check highest number in array
let maxNum = Math.max.apply(null, CHART);
let numArr = [];

for (let i = 0; i <= maxNum ; i++) {
  numArr.push(i);
}

// console.log(numArr.length);
for (let i = maxNum; i >= 0; i--){
  console.log(i);
}


let graph = document.createElement('div'),
    table = document.createElement('table'),
    tr = document.createElement('tr'),
    td = document.createElement('td');

td.setAttribute('colspan', CHART.length + 1);
tr.appendChild(td);
table.appendChild(tr);
graph.appendChild(table);

let barrow = document.createElement('tr');
let elementValue = document.createElement('td');
elementValue.classList.add('yAxis');

for (let i = maxNum; i > 0; i--) {
  let valueDiv = document.createElement('div');
  valueDiv.classList.add('valueDiv');
  valueDiv.height = '35px';
  valueDiv.width = '35px';
  valueDiv.innerHTML = `${numArr[i]}`;
  elementValue.appendChild(valueDiv);
}
barrow.appendChild(elementValue);


for(let i = 0; i < CHART.length; i++) {
  barrow.classList.add('bar');
  let bardata = document.createElement('td');
  let bar = document.createElement('div');
  let indexValue = document.createElement('div');
  

  if (CHART[i] <= 5) { bar.classList.add(COLORS[0]); }
  else if (CHART[i] <= 10) { bar.classList.add(COLORS[1]); }
  else { bar.classList.add(COLORS[2]); }

  bar.style.height = `${CHART[i]*35}px`;
  bar.style.width = '55px';

  indexValue.classList.add('valueDiv');
  indexValue.innerText = `${i}`;


  bardata.appendChild(bar);
  bardata.appendChild(indexValue);
  barrow.appendChild(bardata);
}


table.appendChild(barrow);
graph.appendChild(table);
CONTAINER.innerHTML = graph.outerHTML;


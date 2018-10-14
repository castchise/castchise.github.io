const day = document.getElementById('infobar-day');
const date = document.getElementById('infobar-date');
const time = document.getElementById('infobar-time');
const ampmField = document.getElementById('ampm');

const currentDate = new Date();

// hours/minutes variables for am/pm detection
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();

hours = hours % 12;
hours = hours ? hours : 12;
hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;

// hours/minutes typed in innerhtml

let strHours = currentDate.getHours();
let strMinutes = currentDate.getMinutes();
strHours = strHours < 10 ? '0' + strHours : strHours;
strMinutes = strMinutes < 10 ? '0' + strMinutes : strMinutes;


const ampm = hours >= 12 ? 'PM' : 'AM';

// current day in text format

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
Date.prototype.getDayInText = function() {
  return days[this.getDay()];
};

// filling data into ui

day.innerHTML = `${currentDate.getDayInText()}`;

date.innerHTML = `${currentDate.getDate()}.${currentDate.getMonth()+1}.${currentDate.getFullYear().toString().substr(-2)}`;

time.innerHTML = `${strHours}:${strMinutes}`;
ampmField.innerHTML = `${ampm}`;
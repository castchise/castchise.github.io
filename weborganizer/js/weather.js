class Weather {
  constructor(city) {
    this.apiKey = '6eb6ea0f9bf20eaa25d49de27eecdb37';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.apiKey}`);

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }

  changeLocation(city) {
    this.city = city;
  }
}

class UI {
  constructor() {
    this.location = document.getElementById('infobar-city');
    this.temp = document.getElementById('infobar-temp');
    this.descr = document.getElementById('infobar-type');
    this.icon = document.getElementById('infobar-icon');
  }

  draw(result) {

    const hours = new Date().getHours();
    let checkTime = '';
    checkTime = hours > 11 ? 'd' : 'n';

    this.location.innerHTML = `${result.name}`;
    this.temp.innerHTML = `${result.main.temp}°C`;
    this.descr.innerHTML = `${result.weather[0].description}`;
    this.icon.className = `owf owf-${result.weather[0].id}-${checkTime}`;
  }
}

// INIT

const ui = new UI();
const weather = new Weather('kharkiv');

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.draw(results);
    })
    .catch(err => console.log(err));
}
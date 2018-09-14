class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.cloud = document.getElementById('w-cloud');
    this.wind = document.getElementById('w-wind');
    this.time = document.getElementById('time');
  }

  draw(result) {
    this.location.textContent = `${result.name}, ${result.sys.country}`;
    this.desc.textContent = result.weather[0].description;
    this.string.textContent = `${result.main.temp}°C`;
    this.icon.setAttribute('src', `https://openweathermap.org/img/w/${result.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${result.main.humidity}%`;
    this.wind.textContent = `Wind speed: ${result.wind.speed} m/s`;

    if(result.clouds.all === 0){
      this.cloud.textContent = 'Sky is clear';
    } else {
      this.cloud.textContent = 'Cloudy';
    }

    let d = new Date();
    let h = (d.getHours() < 10 ? '0' : '') + d.getHours();
    let m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    this.time.textContent = h + ':' + m;
  }
}
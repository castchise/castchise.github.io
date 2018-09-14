class Weather {
  constructor(city) {
    this.apiKey = '6eb6ea0f9bf20eaa25d49de27eecdb37';
    this.city = city;
  }

  async getWeather() {
    // const response = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.apiKey}`);

    const responseData = await response.json();
    return responseData;
  }

  changeLocation(city) {
    this.city = city;
  }
}
// init obj's
const storage = new Storage();
// load stored location data
const weatherLoc = storage.getLocationData();
const weather = new Weather(weatherLoc.city);
const ui = new UI();


document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  weather.changeLocation(city);
  // set in LS
  storage.setLocationData(city);
  // get updt and draw it
  getWeather();

  //close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.draw(results);
    })
    .catch(err => console.log(err));
}
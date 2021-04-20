const weather = document.querySelector('.js-weather');
const API_KEY = 'dfa6f6096f885689f9cb2a9e2762b0bb';
const COORDS = 'coords';

function getWeather(lat, lng){
  // fetch(`https://api.openweathermap.org/data/2.5/weather?q={SEOUL}&appid={API_key}`);
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerHTML = `${temperature} @ ${place}`;
  })

}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
const coordsObj = {
 latitude: latitude, 
 longitude: longitude
 //(위 처럼 객체이름과 키를 같은 이름을 저장할 경우 latitude, longitude 이렇게만 할 수 있음)
};
saveCoords(coordsObj);
getWeather(latitude,longitude);
};

function handleGeoError(){
console.log("Cant access geo location");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
const loadedCoords = localStorage.getItem(COORDS);
if(loadedCoords === null){
  askForCoords();
  } else {
  const parsedCoords = JSON.parse(loadedCoords);
  getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init(){
loadCoords();

}

init();
// Day and time  functionality
let now = new Date();
let date = now.getDate();
let hours = String(now.getHours()).padStart(2, 0);
let minutes = String(now.getMinutes()).padStart(2, 0);
let year = now.getFullYear();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${day}, ${hours}:${minutes}`;

// hooking in to api
function displayCurrent(response) {
  //displays current weather passed from searchCity, below
  let location = document.querySelector("#location-heading");
  location.innerHTML = response.data.name; // sets name of location
  let temperature = Math.round(response.data.main.temp); // gets current temperature and rounds to integer
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = temperature; // displays current temp on page
  let description = document.querySelector("#current-description");
  description.innerHTML = response.data.weather[0].main; // gets text description of current weather and displays on page - can maybe try description instead of main for fuller desc?
  let humidity = document.querySelector("#humidity"); //
  humidity.innerHTML = response.data.main.humidity; // gets humidity data and displays on page
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-text");

  let cityName = searchInput.value;
  cityName = cityName.trim();
  cityName = cityName.toLowerCase();

  let apiKey = "28966f9a5b2543fb60e8a809ec2c1fd9";
  let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios.get(endpoint).then(displayCurrent);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

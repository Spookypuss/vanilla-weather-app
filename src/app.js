// Time and date functionality
let now = new Date();

// can format the date by putting into function and calling the function to update display page
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

function searchLocation(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-text"); // assign variable to input search text
  let heading = document.querySelector("h1");
  console.log(searchInput.value);

  if (searchInput.value) {
    heading.innerHTML = searchInput.value;
  } else {
    alert("Please enter a location");
    heading.innerHTML = null;
  }
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchLocation);

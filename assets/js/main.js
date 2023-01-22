const city = document.querySelector("#input-contry");
const time = document.querySelector("#time");
const divLinks = document.querySelector(".links");
const wetterApp = document.querySelector(".wetter-app");
const changeCountry = document.querySelector(".location-button");
const contryDiv = document.querySelector(".div-designe");
const submit = document.querySelector("#submit");
const day = document.querySelector("#day");
const date = document.querySelector("#present-date");
const lacation = document.querySelector("#location");
const icon = document.querySelector("#icon");
const degre = document.querySelector("#degre");
const descriptions = document.querySelector("#description");
const visibility = document.querySelector("#visisbility");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const iconPresenttDay = document.querySelector("#icon-presnt-day");
const presenttDay = document.querySelector("#present-day");
const degrePresesntDay = document.querySelector("#degre-present-day");
const iconDay2 = document.querySelector("#icon-day2");
const day2 = document.querySelector("#day2");
const degreDay2 = document.querySelector("#degre-day2");
const iconDay3 = document.querySelector("#icon-day3");
const day3 = document.querySelector("#day3");
const degreDay3 = document.querySelector("#degre-day3");
const iconday4 = document.querySelector("#icon-day4");
const day4 = document.querySelector("#day4");
const degreDay4 = document.querySelector("#degre-day4");
let citys = "xanten";

let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];
let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];
let dat = new Date();
setInterval(() => {
  let date = new Date();
  let stunden = date.getHours().toString().padStart(2, `0`);
  let minuten = date.getMinutes().toString().padStart(2, `0`);
  let sekunden = date.getSeconds().toString().padStart(2, `0`);

  time.innerHTML = `${stunden}:${minuten}:${sekunden}`;
});
let days = wochenTag[dat.getDay()];
let monat = monate[dat.getMonth()].substring(0, 3);
let year = dat.getFullYear();
let datNum = dat.getDate();
changeCountry.addEventListener("click", () => {
  contryDiv.style.visibility = "visible";
  wetterApp.style.backgroundImage = "url('../../assets/img/images.jpeg')";
});
submit.addEventListener(
  "click",
  () => {
    citys = city.value;
    console.log(citys);
    contryDiv.style.visibility = "hidden";
    wether.fetchData();
  },
  1000
);

let wether = {
  apiKey: "485d545523b87a052f1ed53978add831",

  fetchData: function () {
    console.log(citys);
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${citys}&appid=485d545523b87a052f1ed53978add831`
    )
      .then((response) => response.json())
      .then((locat) => {
        let lat = locat[0].lat;
        let lon = locat[0].lon;
        console.log(lat);
        console.log(lon);
        fetch(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${wether.apiKey}&units=metric`
        )
          .then((response) => response.json())
          .then((data) => wether.wetherApp(data));
      });
  },
  wetherApp: function (data) {
    day.innerHTML = days;
    date.innerHTML = `${datNum} ${monat} ${year}`;
    let cityName = data.city.name;
    lacation.innerHTML = `${cityName}, ${data.city.country}`;
    let icons = data.list[0].weather[0].description;
    console.log(icons);
    if (icons == "overcast clouds") {
      icon.innerHTML = `<i class="fa-solid fa-cloud weatherIcons"></i>`;
    } else if (icons == "broken clouds") {
      icon.innerHTML = `<i class="fa-solid fa-cloud-sun weatherIcons"></i>`;
    } else if (icons == "scattered clouds") {
      icon.innerHTML = `<i class="fa-solid fa-cloud weatherIcons"></i>`;
    } else if (icons == "few clouds") {
      icon.innerHTML = `<i class="fa-solid fa-cloud-sun weatherIcons"></i>`;
    } else if (icons == "rain") {
      icon.innerHTML = `<i class="fa-solid fa-cloud-rain weatherIcons "></i>`;
    } else if (icons == "light rain") {
      icon.innerHTML = `<i class="fa-solid fa-cloud-rain weatherIcons"></i>`;
    } else if (icons == "clear sky") {
      icon.innerHTML = `<p class = "weatherIcons">☀️</p>`;
    }
    let deg = data.list[0].main.temp_max;
    degre.innerHTML = `${deg.toFixed(0)} C`;
    let descrip = data.list[0].weather[0].main;
    if (descrip == "Rain") {
      descriptions.innerHTML = `Rainy`;
      divLinks.style.backgroundImage =
        "url('../../assets/img/maxresdefault.jpeg')";
      wetterApp.style.backgroundImage =
        "url('../../assets/img/maxresdefault.jpeg')";
    } else if (descrip == "Clouds") {
      descriptions.innerHTML = `Cloudy`;
      divLinks.style.backgroundImage = "url('../../assets/img/1462183.webp')";
      wetterApp.style.backgroundImage = "url('../../assets/img/1462183.webp')";
    } else if (descrip == "Clear") {
      descriptions.innerHTML = `Sunny`;
      divLinks.style.backgroundImage = "url('../../assets/img/3265126.jpeg')";
      wetterApp.style.backgroundImage = "url('../../assets/img/3265126.jpeg')";
    }
    let visb = data.list[0].visibility / 1000;
    console.log(visb);
    visibility.innerHTML = `${visb} km/h`;
    let himdi = data.list[0].main.humidity;
    humidity.innerHTML = `${himdi} %`;
    let winde = data.list[0].wind.speed;
    wind.innerHTML = `${winde.toFixed(0)} km/h`;
    console.log(icons);
    if (icons == "overcast clouds") {
      iconPresenttDay.innerHTML = `<i class="fa-solid fa-cloud weatherIcons"></i>`;
    } else if (icons == "few clouds") {
      iconPresenttDay.innerHTML = `<i class="fa-solid fa-cloud-sun weatherIcons"></i>`;
    } else if (icons == "broken clouds") {
      iconPresenttDay.innerHTML = `<i class="fa-solid fa-cloud-sun weatherIcons"></i>`;
    } else if (icons == "rain") {
      iconPresenttDay.innerHTML = `<i class="fa-solid fa-cloud-rain weatherIcons "></i>`;
    } else if (icons == "scattered clouds") {
      iconPresenttDay.innerHTML = `<i class="fa-solid fa-cloud weatherIcons"></i>`;
    } else if (icons == "light rain") {
      iconPresenttDay.innerHTML = `<i class="fa-solid fa-cloud-rain weatherIcons"></i>`;
    } else if (icons == "clear sky") {
      iconPresenttDay.innerHTML = `<p class = "weatherIcons">☀️</p>`;
    }
    presenttDay.innerHTML = wochenTag[dat.getDay()].substring(0, 3);
    degrePresesntDay.innerHTML = `${deg.toFixed(0)} C`;
    let iconsDay2 = data.list[6].weather[0].description;
    console.log(iconsDay2);
    if (iconsDay2 == "overcast clouds") {
      iconDay2.innerHTML = `<i class="fa-solid fa-cloud weatherIcons"></i>`;
    } else if (iconsDay2 == "broken clouds") {
      iconDay2.innerHTML = `<i class="fa-solid fa-cloud-sun weatherIcons"></i>`;
    } else if (iconsDay2 == "scattered clouds") {
      iconDay2.innerHTML = `<i class="fa-solid fa-cloud weatherIcons"></i>`;
    } else if (iconsDay2 == "few clouds") {
      iconDay2.innerHTML = `<i class="fa-regular fa-cloud-sun weatherIcons"></i>`;
    } else if (iconsDay2 == "rain") {
      iconDay2.innerHTML = `<i class="fa-solid fa-cloud-rain weatherIcons "></i>`;
    } else if (iconsDay2 == "light rain") {
      iconDay2.innerHTML = `<i class="fa-solid fa-cloud-rain weatherIcons"></i>`;
    } else if (iconsDay2 == "clear sky") {
      iconDay2.innerHTML = `<p class = "weatherIcons">☀️</p>`;
      console.log(iconDay2);
    }
    day2.innerHTML = wochenTag[dat.getDay() + 1].substring(0, 3);
    degreDay2.innerHTML = `${data.list[5].main.temp_max.toFixed(0)} C`;
    let iconsDay3 = data.list[12].weather[0].description;
    console.log(iconsDay3);
    if (iconsDay3 == "overcast clouds") {
      iconDay3.innerHTML = `<i class="fa-solid fa-cloud weatherIcons"></i>`;
    } else if (iconsDay3 == "broken clouds") {
      iconDay3.innerHTML = `<i class="fa-solid fa-cloud-sun weatherIcons"></i>`;
    } else if (iconsDay3 == "scattered clouds") {
      iconDay3.innerHTML = `<i class="fa-solid fa-cloud weatherIcons"></i>`;
    } else if (iconsDay3 == "few clouds") {
      iconDay3.innerHTML = `<i class="fa-solid fa-cloud-sun weatherIcons"></i>`;
    } else if (iconsDay3 == "rain") {
      iconDay3.innerHTML = `<i class="fa-solid fa-cloud-rain weatherIcons "></i>`;
    } else if (iconsDay3 == "light rain") {
      iconDay3.innerHTML = `<i class="fa-solid fa-cloud-rain weatherIcons"></i>`;
    } else if (iconsDay3 == "clear sky") {
      iconDay3.innerHTML = `<p class = "weatherIcons">☀️</p>`;
    }
    day3.innerHTML = wochenTag[dat.getDay() + 2].substring(0, 3);
    degreDay3.innerHTML = `${data.list[12].main.temp_max.toFixed(0)} C`;
    let iconsDay4 = data.list[24].weather[0].description;
    if (iconsDay4 == "overcast clouds") {
      iconday4.innerHTML = `<i class="fa-solid fa-cloud weatherIcons"></i>`;
    } else if (iconsDay4 == "broken clouds") {
      iconday4.innerHTML = `<i class="fa-solid fa-cloud-sun weatherIcons"></i>`;
    } else if (iconsDay4 == "scattered clouds") {
      iconday4.innerHTML = `<i class="fa-solid fa-cloud weatherIcons"></i>`;
    } else if (iconsDay4 == "few clouds") {
      iconday4.innerHTML = `<i class="fa-solid fa-cloud-sun weatherIcons"></i>`;
    } else if (iconsDay4 == "rain") {
      iconday4.innerHTML = `<i class="fa-solid fa-cloud-rain weatherIcons "></i>`;
    } else if (iconsDay4 == "light rain") {
      iconday4.innerHTML = `<i class="fa-solid fa-cloud-rain weatherIcons"></i>`;
    } else if (iconsDay4 == "clear sky") {
      iconday4.innerHTML = `<p class = "weatherIcons">☀️</p>`;
    }
    day4.innerHTML = wochenTag[dat.getDay() + 3].substring(0, 3);
    degreDay4.innerHTML = `${data.list[24].main.temp_max.toFixed(0)} C`;
  },
};
wether.fetchData();
console.log(icon.textContent);

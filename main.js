// search form
// query form, add event, fetch api
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // reset/remove old things
  const location = event.target.location.value;
  console.log(location);

  // find errors
  if (!location) {
    document.querySelector(".display").classList.add("error");
    // if no location and button is submitted (set main section to add class of error), background turns red and font turns white
  } else {
    //   reset/remove old things
    document.querySelector(".display p").classList.add("hidden");
    document.querySelector(".history p").classList.add("hidden");

    fetch(`https://wttr.in/${location}?format=j1`)
      .then((response) => response.json())
      .then((weather) => {
        // check weather
        console.log(weather);

        // create 4 articles in the main section (main-info, today, tomorrow, day-after)
        const mainInfo = document.createElement("article");
        mainInfo.id = "main-info";
        const today = document.createElement("article");
        today.id = "today";
        const tomorrow = document.createElement("article");
        tomorrow.id = "tomorrow";
        const dayAfter = document.createElement("article");
        dayAfter.id = "day-after";

        // append all to display section
        document
          .querySelector(".display")
          .append(mainInfo, today, tomorrow, dayAfter);

        // main info
        const mainHeading = document.createElement("h2");
        mainHeading.textContent = location;
        const area = document.createElement("p");
        area.textContent = `Area: ${weather.nearest_area[0].areaName[0].value}`;
        const region = document.createElement("p");
        region.textContent = `Region: ${weather.nearest_area[0].region[0].value}`;
        const country = document.createElement("p");
        country.textContent = `Country: ${weather.nearest_area[0].country[0].value}`;
        const currently = document.createElement("p");
        currently.textContent = `Currently: Feels like ${weather.current_condition[0].FeelsLikeF}°F`;
        // append to main
        // mainInfo.append(mainHeading, area, region, country, currently);

        // add to today
        const todayHeading = document.createElement("h3");
        todayHeading.textContent = "Today";
        const avgTempToday = document.createElement("p");
        avgTempToday.innerHTML = `<span>Average Temperature:</span> ${weather.weather[0].avgtempF}`;
        const maxTempToday = document.createElement("p");
        maxTempToday.textContent = `Max Temperature: ${weather.weather[0].maxtempF}`;
        const minTempToday = document.createElement("p");
        minTempToday.textContent = `Min Temperature: ${weather.weather[0].mintempF}`;
        // append to today
        // today.textContent = `${todayHeading} ${avgTempToday} ${maxTempToday} ${minTempToday}`;

        // add to tomorrow
        const tomorrowHeading = document.createElement("h3");
        tomorrowHeading.textContent = "Tomorrow";
        const avgTempTomorrow = document.createElement("p");
        avgTempTomorrow.innerHTML = `<span>Average Temperature:</span> ${weather.weather[1].avgtempF}`;
        const maxTempTomorrow = document.createElement("p");
        maxTempTomorrow.textContent = `Max Temperature: ${weather.weather[1].maxtempF}`;
        const minTempTomorrow = document.createElement("p");
        minTempTomorrow.textContent = `Min Temperature: ${weather.weather[1].mintempF}`;

        // add to day after
        const dayAfterHeading = document.createElement("h3");
        dayAfterHeading.textContent = "Day After Tomorrow";
        const dayAfterAvg = document.createElement("p");
        dayAfterAvg.innerHTML = `<span>Average Temperature:</span> ${weather.weather[2].avgtempF}°F`;
        const dayAfterMax = document.createElement("p");
        dayAfterMax.innerHTML = `<span>Highest Temperature:</span> ${weather.weather[2].maxtempF}°F`;
        const dayAfterMin = document.createElement("p");
        dayAfterMin.innerHTML = `<span>Lowest Temperature:</span> ${weather.weather[2].mintempF}°F`;
        // append to dayAfter
        // dayAfter.append(dayAfterHeading, dayAfterAvg, dayAfterMax, dayAfterMin);

        // append items to aside for previous searches
        // const searchList = document.querySelector("ul");
        // searches.innerHTML += `<li><a href=">${location}</a> - ${weather.current_condition[0].FeelsLikeF}°F</li>`;
        // document.querySelector(".history").append;

        // // append weather info
        // document.querySelector(".display");
      });
  }
  event.target.reset();
});

// previous searches
// use info from mainHeading to grab the location
// use info from currently to grab the current temp
// const mainHeading = document.createElement("h2");
// mainHeading.textContent = location;
// const area = document.createElement("p");

// const currently = document.createElement("p");
//         currently.textContent = `Currently: Feels like ${weather.current_condition[0].FeelsLikeF}°F`;

const previous = document.createElement("li");
previous.textContent = location;

// search form
// query form, add event, fetch api
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // reset/remove old things
  const location = event.target.location.value;
  // console.log(location);

  // find errors
  if (!location) {
    document.querySelector(".display").classList.add("error");

    // if no location and button is submitted (set main section to add class of error), background turns red and font turns white
  } else {
    //   reset/remove old things
    document.querySelector(".history p").classList.add("hidden");

    fetch(`https://wttr.in/${location}?format=j1`)
      .then((response) => response.json())
      .then((weather) => {
        // check weather
        // console.log(weather);

        document.querySelector(
          "#textBox"
        ).innerHTML = `<h2>${weather.nearest_area[0].areaName[0].value}
        </h2>
        <p><b>Area:</b> ${weather.nearest_area[0].areaName[0].value}</p>
        <p><strong>Region:</strong> ${weather.nearest_area[0].region[0].value}</p>
        <p><b>Country:</b> ${weather.nearest_area[0].country[0].value}</p>
        <p><b>Currently:</b> Feels Like ${weather.current_condition[0].FeelsLikeF}°F</p>`;

        document.querySelector("#today").innerHTML = `<h3>Today
          </h3>
          <p><b>Average Temperature:</b> ${weather.weather[0].avgtempF}°F</p>
          <p><strong>Max Temperature:</strong> ${weather.weather[0].maxtempF}°F</p>
          <p><b>Min Temperature:</b> ${weather.weather[0].mintempF}°F</p>`;

        document.querySelector("#tomorrow").innerHTML = `<h3>Tomorrow
          </h3>
          <p><b>Average Temperature:</b> ${weather.weather[1].avgtempF}°F</p>
          <p><strong>Max Temperature:</strong> ${weather.weather[1].maxtempF}°F</p>
          <p><b>Min Temperature:</b> ${weather.weather[1].mintempF}°F</p>`;

        document.querySelector("#dayAfter").innerHTML = `<h3>Day After Tomorrow
          </h3>
          <p><b>Average Temperature:</b> ${weather.weather[2].avgtempF}°F</p>
          <p><strong>Max Temperature:</strong> ${weather.weather[2].maxtempF}°F</p>
          <p><b>Min Temperature:</b> ${weather.weather[2].mintempF}°F</p>`;

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
        // document
        //   .querySelector(".display")
        //   .append(mainInfo, today, tomorrow, dayAfter);

        // previous search
        const previousSearches = document.querySelector("ul");

        previousSearches.innerHTML += `<li><a href="#">${location}</a> - ${weather.current_condition[0].FeelsLikeF}°F</li>`;
        const anchors = document.querySelectorAll("a");
        for (let anchor of anchors) {
          anchor.addEventListener("click", (event) => {
            event.preventDefault();

            // click previous
            const link = event.target.textContent;
            console.log(link);
            document.querySelector(".history p").classList.add("hidden");
            fetch(`https://wttr.in/${link}?format=j1`)
              .then((response) => response.json())
              .then((weather) => {
                console.log(weather);
                document.querySelector(
                  "#textBox"
                ).innerHTML = `<h2>${weather.nearest_area[0].areaName[0].value}
                </h2>
                <p><b>Area:</b> ${weather.nearest_area[0].areaName[0].value}</p>
                <p><strong>Region:</strong> ${weather.nearest_area[0].region[0].value}</p>
                <p><b>Country:</b> ${weather.nearest_area[0].country[0].value}</p>
                <p><b>Currently:</b> Feels Like ${weather.current_condition[0].FeelsLikeF}°F</p>`;

                document.querySelector("#today").innerHTML = `<h3>Today
                  </h3>
                  <p><b>Average Temperature:</b> ${weather.weather[0].avgtempF}°F</p>
                  <p><strong>Max Temperature:</strong> ${weather.weather[0].maxtempF}°F</p>
                  <p><b>Min Temperature:</b> ${weather.weather[0].mintempF}°F</p>`;

                document.querySelector("#tomorrow").innerHTML = `<h3>Tomorrow
                  </h3>
                  <p><b>Average Temperature:</b> ${weather.weather[1].avgtempF}°F</p>
                  <p><strong>Max Temperature:</strong> ${weather.weather[1].maxtempF}°F</p>
                  <p><b>Min Temperature:</b> ${weather.weather[1].mintempF}°F</p>`;

                document.querySelector(
                  "#dayAfter"
                ).innerHTML = `<h3>Day After Tomorrow
                  </h3>
                  <p><b>Average Temperature:</b> ${weather.weather[2].avgtempF}°F</p>
                  <p><strong>Max Temperature:</strong> ${weather.weather[2].maxtempF}°F</p>
                  <p><b>Min Temperature:</b> ${weather.weather[2].mintempF}°F</p>`;
              });
          });
        }
      });
  }
  event.target.reset();
});

// previous work

// // main info
// const mainHeading = document.createElement("h2");
// mainHeading.textContent = location;
// const area = document.createElement("p");
// area.textContent = `Area: ${weather.nearest_area[0].areaName[0].value}`;
// const region = document.createElement("p");
// region.textContent = `Region: ${weather.nearest_area[0].region[0].value}`;
// const country = document.createElement("p");
// country.textContent = `Country: ${weather.nearest_area[0].country[0].value}`;
// const currently = document.createElement("p");
// currently.textContent = `Currently: Feels like ${weather.current_condition[0].FeelsLikeF}°F`;

// // add to today
// const todayHeading = document.createElement("h3");
// todayHeading.textContent = "Today";
// const avgTempToday = document.createElement("p");
// avgTempToday.innerHTML = `<span>Average Temperature:</span> ${weather.weather[0].avgtempF}`;
// const maxTempToday = document.createElement("p");
// maxTempToday.textContent = `Max Temperature: ${weather.weather[0].maxtempF}`;
// const minTempToday = document.createElement("p");
// minTempToday.textContent = `Min Temperature: ${weather.weather[0].mintempF}`;

// // add to tomorrow
// const tomorrowHeading = document.createElement("h3");
// tomorrowHeading.textContent = "Tomorrow";
// const avgTempTomorrow = document.createElement("p");
// avgTempTomorrow.innerHTML = `<span>Average Temperature:</span> ${weather.weather[1].avgtempF}`;
// const maxTempTomorrow = document.createElement("p");
// maxTempTomorrow.textContent = `Max Temperature: ${weather.weather[1].maxtempF}`;
// const minTempTomorrow = document.createElement("p");
// minTempTomorrow.textContent = `Min Temperature: ${weather.weather[1].mintempF}`;

// // add to day after
// const dayAfterHeading = document.createElement("h3");
// dayAfterHeading.textContent = "Day After Tomorrow";
// const dayAfterAvg = document.createElement("p");
// dayAfterAvg.innerHTML = `<span>Average Temperature:</span> ${weather.weather[2].avgtempF}°F`;
// const dayAfterMax = document.createElement("p");
// dayAfterMax.innerHTML = `<span>Highest Temperature:</span> ${weather.weather[2].maxtempF}°F`;
// const dayAfterMin = document.createElement("p");
// dayAfterMin.innerHTML = `<span>Lowest Temperature:</span> ${weather.weather[2].mintempF}°F`;

// append items to aside for previous searches
// const searchList = document.querySelector("ul");
// searches.innerHTML += `<li><a href=">${location}</a> - ${weather.current_condition[0].FeelsLikeF}°F</li>`;
// document.querySelector(".history").append;

// // append weather info
// document.querySelector(".display");

// previous searches
// use info from mainHeading to grab the location
// use info from currently to grab the current temp

// const mainHeading = document.createElement("h2");
// mainHeading.textContent = location;
// const area = document.createElement("p");

// const currently = document.createElement("p");
//         currently.textContent = `Currently: Feels like ${weather.current_condition[0].FeelsLikeF}°F`;

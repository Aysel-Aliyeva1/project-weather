function getWeather() {
  let city = document.getElementById("city").value;

  let dynamicUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`;

  fetch(dynamicUrl)
    .then((response) => response.json())
    .then((obj) => {
      if (obj.cod == 404) {
        document.getElementById("main3").style.visibility = "hidden";
        document.getElementById("error-message").style.display = "block";
        document.getElementById("error-message").innerHTML = obj.message;
      } else {

        document.getElementById("error-message").style.display = "none";
        document.getElementById("main3").style.visibility = "visible";
        
        document.getElementById("wcondition").innerHTML =
          obj?.weather[0]?.description || "";
        document.getElementById("cityname").innerHTML = obj?.name || "";
        let feelsLikeCelcius = Math.round(obj?.main?.feels_like - 273.15);
        document.getElementById("feelslike").innerHTML = feelsLikeCelcius || "";
        document.getElementById("humidity").innerHTML =
          obj?.main?.humidity || "";
        document.getElementById("wind").innerHTML = obj?.wind?.speed || "";
        let tempCelcius = Math.round(obj?.main?.temp - 273.15);
        document.getElementById("degreebig").innerHTML = tempCelcius || "";
        let tMaxCelcius = Math.round(obj?.main?.temp_max - 273.15);
        document.getElementById("high").innerHTML = tMaxCelcius || "";
        let tMinCelcius = Math.round(obj?.main?.temp_min - 273.15);
        document.getElementById("low").innerHTML = tMinCelcius || "";
        let icon = obj?.weather[0]?.icon;
        let dynamicIconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.getElementById("wimg").src = dynamicIconUrl;
      }
    })
    .catch((err) => console.log("Weather error", err));
}

// 5

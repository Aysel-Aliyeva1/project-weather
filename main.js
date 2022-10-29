let input = document.getElementById("city");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("citybtn").click();
  }
});

function getWeather() {
  let val = document.getElementById("city").value;

  if (val == "") {
    alert("You must enter a city");
    return;
  }

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
        document.getElementById("winds").innerHTML = obj?.wind?.speed || "";
        document.getElementById("winddeg").innerHTML = obj?.wind?.deg || "";
        let tempCelcius = Math.round(obj?.main?.temp - 273.15);
        document.getElementById("degreebig").innerHTML = tempCelcius || "";
        let tMaxCelcius = Math.round(obj?.main?.temp_max - 273.15);
        document.getElementById("high").innerHTML = tMaxCelcius || "";
        let tMinCelcius = Math.round(obj?.main?.temp_min - 273.15);
        document.getElementById("low").innerHTML = tMinCelcius || "";
        document.getElementById("country").innerHTML = obj?.sys?.country || "";
        document.getElementById("clouds").innerHTML = obj?.clouds?.all || "";
        // let icon = obj?.weather[0]?.icon;
        // let dynamicIconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        // document.getElementById("wimg").src = dynamicIconUrl;

        if (obj?.weather[0]?.description == "clear sky") {
          document.getElementById("main2").style.backgroundImage =
            "url('https://t4.ftcdn.net/jpg/03/05/09/59/360_F_305095987_GdzExAR8x0LCCNBdanfBIw8HkJiJZzDg.jpg')";
          document.getElementById("main2").style.backgroundSize = "cover";
          document.getElementById("main2").style.backgroundRepeat = "no-repeat";
          // document.getElementById("main2").style.backgroundPosition = "left-top";
          // document.getElementById("main2").style.backgroundAttachment = "fixed";
        }
        //broken qardi?
        if (obj?.weather[0]?.description == "broken clouds") {
          document.getElementById("main2").style.backgroundImage =
            "url('https://media.istockphoto.com/photos/the-sky-covering-with-white-clouds-picture-id1148566425?b=1&k=20&m=1148566425&s=170667a&w=0&h=-HqK4qqqwYOGnkTn8Dqfn7SK6VUfSZ-w4ImDHD3om-g=')";
          document.getElementById("main2").style.backgroundSize = "cover";
          document.getElementById("main2").style.backgroundRepeat = "no-repeat";
        }
        if (obj?.weather[0]?.description == "light rain") {
          document.getElementById("main2").style.backgroundImage =
            "url('https://i0.wp.com/www.eadarsha.com/eng/wp-content/uploads/sites/2/2022/03/rain-315446_1280.jpg?fit=750%2C496&ssl=1')";
          document.getElementById("main2").style.backgroundSize = "cover";
          document.getElementById("main2").style.backgroundRepeat = "no-repeat";
        }
        if (obj?.weather[0]?.description == "few clouds") {
          document.getElementById("main2").style.backgroundImage =
            "url('https://airstudiopaducah.files.wordpress.com/2013/07/bright-blue-sky-with-a-few-tiny-white-clouds-e1380556952793.jpg')";
          document.getElementById("main2").style.backgroundSize = "cover";
          document.getElementById("main2").style.backgroundRepeat = "no-repeat";
        }
        if (obj?.weather[0]?.description == "thunderstorm") {
          document.getElementById("main2").style.backgroundImage =
            "url('https://wallpaper.dog/large/20473891.jpg')";
          document.getElementById("main2").style.backgroundSize = "cover";
          document.getElementById("main2").style.backgroundRepeat = "no-repeat";
        }
        if (obj?.weather[0]?.description == "overcast clouds") {
          document.getElementById("main2").style.backgroundImage =
            "url('https://s3.envato.com/files/135987809/Image%20Preview.jpg')";
          document.getElementById("main2").style.backgroundSize = "cover";
          document.getElementById("main2").style.backgroundRepeat = "no-repeat";
        }
      }
    })
    .catch((err) => console.log("Weather error", err));
}

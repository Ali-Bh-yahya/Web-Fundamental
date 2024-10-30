function removeFunctionOfCookiens() {
  let element = document.querySelector(".cookies-position-fixed");
  element.remove();
}

function clicktoShowWeatherReport() {
  alert("Loding weather report");
}

function selectDeg(deg) {
  var theDegrees = document.querySelectorAll(".convert-temperature");
  if (deg == "fahrenheit") {
    for (var i = 0; i < theDegrees.length; i++) {
      theDegrees[i].innerText = convertCelsiustofahrenheit(theDegrees[i].innerText);
    }
  } else {
    for (var i = 0; i < theDegrees.length; i++) {
      theDegrees[i].innerText = convertFahrenheittocelsius(theDegrees[i].innerText);
    }
  }
}

function convertCelsiustofahrenheit(theDegrees) {
  return Math.round((9 / 5) * theDegrees + 32);
}
function convertFahrenheittocelsius(theDegrees) {
  return Math.round((5 / 9) * (theDegrees - 32));
}

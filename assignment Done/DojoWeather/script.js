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
      theDegrees[i].innerText = Math.round((9 / 5) * theDegrees[i].innerText + 32);
    }
  } else {
    for (var i = 0; i < theDegrees.length; i++) {
      theDegrees[i].innerText = convertFromCeltoFah(theDegrees[i].innerText);
    }
  }
}

function convertFromCeltoFah(degree){
   return Math.round((5 / 9) * (degree - 32));
}

function change_username(elemnet) {
  var change_name = document.querySelector('.user-name');
  if (change_name.innerText == "Ali Yahya") {
    change_name.innerText = "Jano doo";
  }
  else {

    change_name.innerText = "Ali Yahya";
  }
}
function accept(user) {
  removeRequest(user);
  let connectionsLabel = document.querySelector('#connections-count')
  connectionsLabel.textContent++;
}
function removeRequest(user) {
  let connectionRequestsLabel = document.querySelector('#connection-requests-count')
  connectionRequestsLabel.textContent--;
  if (user === 'todd') {
    let element = document.querySelector('#todd-request');
    element.remove();
  } else if (user === 'phil') {
    let element = document.querySelector('#neil-request');
    element.remove();
  }
  if (connectionRequestsLabel.textContent == "0") {
    let requestsWindow = document.querySelector('.connection-requests-window');
    requestsWindow.remove();
  }
}


var reverseString = function(s) {
  let right = s.length - 1;
    for (let i = 0; i < s.length / 2; i++) {
      let temp = s[right];
      s[right] = s[i];
      s[i] = temp;
      right--;
    }
  return s;
};

// ["h", "e", "l", "l", "o"]
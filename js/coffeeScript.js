function disappearButtons(...buttonNums) {
  for (var i = 0; i < buttonNums.length; i++) {
    document.getElementById("menuOption" + buttonNums[i]).parentElement.style.display = 'none';
  }
}

function appearButtons(...buttonNums) {
  for (var i = 0; i < buttonNums.length; i++) {
    document.getElementById("menuOption" + buttonNums[i]).parentElement.style.display = 'block';
  }
}

function displayOnScreen(text) {
  display.innerHTML = text;
}
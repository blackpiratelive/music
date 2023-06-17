// make a function that writes cookies to the browser
function writeCookie(name, value, days) {
    var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
// make a function that changes the css variable named --color
function changeColor(color) {
    document.documentElement.style.setProperty("--color", color);
}

// make a function that changes the stylesheet of the html document


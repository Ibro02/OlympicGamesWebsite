var countDownDate = new Date("August 01, 2026 00:00:00").getTime();
var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var months = Math.floor(timeleft / (1000 * 60 * 60 * 24) / 30);
  var years = Math.floor(months / 12);
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  /* var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000); */

  document.getElementById("years").innerHTML = years;
  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  /* document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;*/
}, 1000);

AOS.init();

let date = new Date();
let hours = date.getHours() % 12;
let minutes = date.getMinutes();
let seconds = date.getSeconds();

const clock = document.getElementById("clock");
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

const screenHeight = screen.height;
const screenWidth = screen.width;

if (screenHeight > screenWidth) clock.className = "mobile-screen";
else clock.className = "desktop-screen";

let totalSeconds = (hours * 3600 + minutes * 60 + seconds) % 43200;

let hourDeg = ((1 / 120) * totalSeconds) % 360;
let minuteDeg = ((1 / 10) * totalSeconds) % 360;
let secondDeg = (6 * totalSeconds) % 360;

hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;

setInterval(runClock, 1000);

function runClock() {
  totalSeconds++;

  hourDeg += 1 / 120;
  minuteDeg += 1 / 10;
  secondDeg += 6;

  hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;

  if (totalSeconds % 60 == 0) secondDeg = 0;
  if (totalSeconds % 3600 == 0) minuteDeg = 0;
  if (totalSeconds % 43200 == 0) {
    totalSeconds = 0;
    hourDeg = 0;
  }
}

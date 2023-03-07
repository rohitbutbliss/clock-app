let date = new Date();
let hours = date.getHours() % 12;
let minutes = date.getMinutes();
let seconds = date.getSeconds();

const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

let totalSeconds = hours * 3600 + minutes * 60 + seconds;

let hourDeg = (1 / 120) * totalSeconds;
let minuteDeg = (1 / 10) * totalSeconds;
let secondDeg = 6 * totalSeconds;

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
  if (totalSeconds % 43200 == 0) hourDeg = 0;
}

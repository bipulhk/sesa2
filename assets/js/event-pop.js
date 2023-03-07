// select popup and close button
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close');

// select countdown elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// calculate the countdown
function countdown() {
  const currentDate = new Date();
  const eventDate = new Date('March 19, 2023 00:00:00');
  const totalSeconds = (eventDate - currentDate) / 1000;
  
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  
  // update countdown elements
  daysEl.textContent = days;
  hoursEl.textContent = hours < 10 ? '0' + hours : hours;
  minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
  secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
}

// show popup on page load
window.addEventListener('load', function() {
  popup.style.display = 'block';
});

// close popup on close button click
closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});

// update countdown every second
setInterval(countdown, 1000);


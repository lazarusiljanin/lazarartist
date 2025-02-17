

const Days = document.getElementById('days')
const Hours = document.getElementById('hours')
const Minutes = document.getElementById('minutes')
const Seconds = document.getElementById('seconds')

const targetdate = new Date('April 22 2025 00:00:00').getTime()

function timer() {
  const currentdate = new Date().getTime()
  const distance = targetdate - currentdate


  const days = Math.floor(distance / 1000 / 60 / 60 / 24)
  const hours = Math.floor(distance / 1000 / 60 / 60) % 24
  const minutes = Math.floor(distance / 1000 / 60)  % 60
  const seconds = Math.floor(distance / 1000) % 60



Days.innerHTML = `${days} Days`;
Hours.innerHTML = `${hours} Hours`;
Minutes.innerHTML = `${minutes} Minutes`;
Seconds.innerHTML = `${seconds} Seconds`;


}

setInterval(timer, 1000)
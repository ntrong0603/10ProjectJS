const daysEl = document.getElementById('days');
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countdown()
{
    const cureentDate = new Date();
    const newYears = '1 Jan ' + (cureentDate.getFullYear() + 1);
    const newYearsDate = new Date(newYears);

    const totalSeconds = new Date(newYearsDate - cureentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    }
}
function formatTime(time)
{
    return time < 10 ? (`0${time}`) : time;
}
function showCountdown()
{
    const objCountdown = countdown();
    daysEl.innerHTML = formatTime(objCountdown.days);
    hoursEl.innerHTML = formatTime(objCountdown.hours);
    minsEl.innerHTML = formatTime(objCountdown.minutes);
    secondsEl.innerHTML = formatTime(objCountdown.seconds);
}
// initial call
// countdown();
showCountdown();

setInterval(showCountdown, 1000);
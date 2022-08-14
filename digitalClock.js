let hoursEle = document.getElementById("hour");
let minutesEle = document.getElementById("minutes");
let secondsEle = document.getElementById("seconds");
let amOrPmEle = document.getElementById("amPm");
function updateClock(){
    let presentTime = new Date()
    let hours = presentTime.getHours()
    let minutes = presentTime.getMinutes()
    let seconds = presentTime.getSeconds()
    let amOrPm = "AM"
    if (hours > 12){
        hours=hours-12
        amOrPm ="PM"
    }
    else{
        amOrPm = "AM"
    }
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hoursEle.textContent = hours;
    minutesEle.textContent = minutes;
    secondsEle.textContent = seconds;
    amOrPmEle.textContent = amOrPm;
    setTimeout(()=>{
        updateClock();
    },1000)
} 
updateClock()

const secHand = document.getElementById('sec');
const minHand = document.getElementById('min');
const hrHand = document.getElementById('hr');

function clockTick() {
    const date =  new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours())/12; 

    rotateClockHand(secHand, seconds);
    rotateClockHand(minHand, minutes);
    rotateClockHand(hrHand, hours);
}

function rotateClockHand(element,rotation) {
    element.style.setProperty('--rotate', rotation*360);
}

setInterval(clockTick,1000);
const durationInput = document.querySelector('#duration-input');
const startBtn = document.querySelector('#start-btn');
const pauseBtn = document.querySelector('#pause-btn');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

new Timer(durationInput, startBtn, pauseBtn, { onStart(totalDuration){ 
    duration = totalDuration}, 
    onTick(timeRemaining){
    circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
    
}, 
    onComplete(){
        console.log('complete')}});
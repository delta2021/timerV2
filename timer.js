class Timer {
    constructor(durationInput, startBtn, pauseBtn, callbacks){
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;

        if (callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
      
        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause)
    }
    start = () => {
        if (this.onStart){
            this.onStart(this.remainingTime);
        }
        this.tick();
        this.intervalID = setInterval(this.tick, 20);
        
    }
    pause = () => {
        clearInterval(this.intervalID);
    }

    tick = () => {
        if (this.remainingTime <= 0){
            this.pause();
            if (this.onComplete){
                this.onComplete();
            }
        } else {
            this.remainingTime = this.remainingTime - 1/50;
            if (this.onTick){
                this.onTick(this.remainingTime);
            }
        }
       
    }

    get remainingTime(){
        return parseFloat(this.durationInput.value);
    }

    set remainingTime(timeLeft){
        this.durationInput.value = timeLeft.toFixed(2);
    }
}

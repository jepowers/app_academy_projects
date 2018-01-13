class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    const startTime = new Date();
    this.hours = startTime.getHours();
      if (this.hours > 12){
        this.hours -= 12;
      }
    this.minutes = startTime.getMinutes();
    this.seconds = startTime.getSeconds(); 


  setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let fHour = this.hours;
      if (fHour < 10) {
        fHour = "0" + fHour;
      }
    let fMin = this.minutes;
      if (fMin < 10) {
        fMin = "0" + fMin;
      }
    let fSec = this.seconds;
      if (fSec < 10) {
        fSec = "0" + fSec;
      }

    const time = `${fHour}:${fMin}:${fSec}`;
    console.log(time);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds += 1;

    if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes += 1;

        if (this.minutes === 60) {
          this.minutes = 0;
          this.hours += 1;

          if (this.hours === 13) {
            this.hours = 1;
          }
        }
    }
    this.printTime();
  }

}

const clock = new Clock();

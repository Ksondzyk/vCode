// const timer = {
//   secondsPassed: 0,
//   minsPassed: 0,
//   startTimer(isCancaled = false) {
//     let self = this;
//     function increment() {
//       self.secondsPassed += 5;
//       if (self.secondsPassed === 60) {
//         self.minsPassed += 1;
//         self.secondsPassed = 0;
//       }
//     }

//     let time = setTimeout(function myTimer() {
//       if (isCancaled) {
//         console.log("Cancelling");
//         clearTimeout(timer);
//       }
//       increment();
//       time = setTimeout(myTimer, 0);
//     }, 5000);
//   },
//   getTime() {
//     console.log(this.minsPassed + ":" + this.secondsPassed);
//     let res =
//       this.secondsPassed.length == 1
//         ? "0" + this.secondsPassed
//         : this.secondsPassed;
//     return this.minsPassed + ":" + res;
//   },
//   stopTimeout() {
//     this.startTimer(true);
//   },
// };
// timer.startTimer();
// // timer.getTime();
// // setTimeout(() => timer.stopTimeout, 2000);

const formatSeconds = (seconds) => {
  if (seconds < 10) {
    return `0${seconds}`;
  }
  return seconds;
};
export const timer = {
  minsPassed: 0,
  secondsPassed: 0,
  _interval: null,
  startTimer() {
    this._interval = setInterval(() => {
      this.secondsPassed += 5;
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 5000);
  },
  stopTimer() {
    clearInterval(this._interval);
    this._interval = null;
  },
  resetTimer() {
    this.stopTimer();
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
  getTime() {
    const formattedSeconds = formatSeconds(this.secondsPassed);
    return `${this.minsPassed}:${formattedSeconds}`;
  },
};

const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
  timer: document.getElementById('timer-1'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start = setInterval(() => {
    const currentTime = Date.now();
    const delta = this.targetDate.getTime() - currentTime;
    this.updateTimer(delta);
  }, 1000);

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateTimer(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    refs.days.textContent = days;

    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    refs.hours.textContent = hours;

    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    refs.mins.textContent = mins;

    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.secs.textContent = secs;
  }

  finishTime(delta) {
    if (delta < 0) {
      clearInterval(this.start);
      return (refs.timer.textContent = 'Ура! Лето!!!');
    }
  }
}
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 01, 2021'),
});

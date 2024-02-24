export default class Clock {
  intervalHandler: any = null;
  initialClock: number;
  decrement: boolean;
  private element: HTMLElement = null;
  
  constructor (element: HTMLElement, initialClock: number, decrement: boolean = false) {
    this.element = element;
    this.initialClock = initialClock;
    this.decrement = decrement;
  }
  
  startClock() {
    let now = this.initialClock;
    
    this.intervalHandler = setInterval(() => {
      this.decrement? now-- : now++;
      this.element.innerText = this.formatTime(now);
    }, 1000)
  }
  
  stopClock() {
    clearInterval(this.intervalHandler);
  }
  
  resetClock() {
    this.stopClock();
    this.startClock();
  }
  
  private formatTime(current: number) {
    const absoluteTime = Math.abs(current);
    let minutes = Math.floor(absoluteTime / 60);
    let seconds = Math.floor(absoluteTime % 60);
    
    const negativeIndicator = (value: number) => value < 0 ? '-' : '';
    
    return `${negativeIndicator(current)}${this.formatNumber(minutes)}:${this.formatNumber(seconds)}`;
  }
  
  private formatNumber(value: number) {
    return `0${value}`.slice(-2);
  }
}

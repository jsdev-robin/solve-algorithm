class MovingAverage {
  constructor(size) {
    this.queue = [];
    this.size = size;
    this.sum = 0;
  }

  next(val) {
    this.queue.push(val);
    this.sum += val;

    if (this.queue.length > this.size) {
      this.queue.shift();
    }

    return +(this.sum / this.queue.length).toFixed(2);
  }
}

let ma = new MovingAverage(3);
console.log(ma.next(1)); // 1.0
console.log(ma.next(10)); // 5.5
console.log(ma.next(3)); // 4.67
console.log(ma.next(5)); // 6.0

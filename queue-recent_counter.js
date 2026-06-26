class RecentCounter {
  constructor() {
    this.queue = [];
  }

  ping(t) {
    this.queue.push(t);

    while (this.queue[0] < t - 3000) {
      this.queue.shift();
    }

    return this.queue.length;
  }
}

let rc = new RecentCounter();
console.log(rc.ping(1)); // 1
console.log(rc.ping(100)); // 2
console.log(rc.ping(3001)); // 3
console.log(rc.ping(3002)); // 3

class Counter {
  count: number = 0;  //mặc định =0.

  //tăng count lên 1 và in "Count is now: <count>".
  increment() {
    this.count++;
    console.log(`Count is now: ${this.count}`);
  }

  //Đưa count về 0 và in "Counter reset".
  reset() {
    this.count = 0;
    console.log("Counter reset");
  }
}

// Tạo instance
const counter = new Counter();

// Gọi method
counter.increment(); // Count 1
counter.increment(); // Count 2
counter.reset();     // Counter reset
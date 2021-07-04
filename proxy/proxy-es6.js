function sendRequest(data) {
  console.log(`Send ${data} to backend server ...`);
}

class Proxy {
  constructor() {
    this.cache = [];
    this.timer;
  }

  send(data) {
    this.cache.push(data);
    if (this.timer) {
      return;
    }

    this.timer = setTimeout(() => {
      sendRequest(this.cache.join(','));
      clearTimeout(this.timer);
      this.timer = null;
      this.cache = [];
    }, 1000 * 3);
  }
}

const proxy = new Proxy();
proxy.send('Baseball');
proxy.send('Basketball');
proxy.send('Tennis');

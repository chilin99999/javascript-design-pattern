function sendRequest(data) {
  console.log(`Send ${data} to backend server ...`);
}

const proxy = (function () {
  let cache = [];
  let timer;

  return function (data) {
    cache.push(data);
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      sendRequest(cache.join(','));
      clearTimeout(timer);
      timer = null;
      cache = [];
    }, 1000 * 3);
  };
})();

proxy('Baseball');
proxy('Basketball');
proxy('Tennis');

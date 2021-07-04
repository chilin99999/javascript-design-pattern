function multiply(a, b) {
  console.log('Do a lot', {a, b});
  return a * b;
}

class ProxyCache {
  constructor(func) {
    this.cache = {};
    this.func = func;
  }

  run(...args) {
    const key = args.join(',');
    if (!this.cache.hasOwnProperty(key)) {
      this.cache[key] = this.func(...args);
    }
    return this.cache[key];
  }
}

const proxyCache = new ProxyCache(multiply);

const result1 = proxyCache.run(2, 3);
console.log(result1);
const result2 = proxyCache.run(4, 5);
console.log(result2);
const result3 = proxyCache.run(2, 3);
console.log(result3);

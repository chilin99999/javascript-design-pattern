class Bonus {
  constructor(performance) {
    // 依賴注入 Dependency Injection
    this.performance = performance;
  }

  getBonus(amount) {
    return this.performance.calculate(amount);
  }
}

class PerformanceBest {
  calculate(amount) {
    return amount * 12;
  }
}

class PerformanceGood {
  calculate(amount) {
    return amount * 3;
  }
}

class PerformanceBad {
  calculate(amount) {
    return amount * 1;
  }
}

class PerformanceAwful {
  calculate() {
    return 0;
  }
}

const bonus = new Bonus(new PerformanceBest());
const result = bonus.getBonus(100); // 100 * 12 = 1200
console.log(result);

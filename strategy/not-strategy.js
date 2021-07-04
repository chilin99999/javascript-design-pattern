function calculateBonus(performance, amount) {
  if (performance == 'Best') {
    return amount * 12;
  }
  if (performance == 'Good') {
    return amount * 3;
  }
  if (performance == 'Bad') {
    return amount * 1;
  }
  if (performance == 'Awful') {
    return 0;
  }
}

const result = calculateBonus('Best', 100); // 100 * 12 = 1200
console.log(result);

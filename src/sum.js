export const sum = (x, y) => x + y;

export const sumAll = (numbers) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
};

export const calculate = (numbers, callback) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }

  callback(total);
};

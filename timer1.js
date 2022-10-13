let args = process.argv.slice(2);

const timer = function(array) {
  for (let element of array) {
    element = Number(element);
    if (Number.isNaN(element)) return;
    if (element > 0) {
      const seconds = element * 1000;
      setTimeout(beep, seconds);
    }
  }
};

const beep = () => process.stdout.write('\x07');

timer(args);
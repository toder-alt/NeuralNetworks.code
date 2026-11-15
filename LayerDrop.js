const target = 1;
let w = 0.8;
const a = 0.5;
const b = 0.1;
const lr = 0.1; 

function activate(sum) {
  return sum <= 0.2 ? 0 : 1;
}

let tick = 0;
const the = setInterval(() => {
  const sum = a * w + b;
  const output = activate(sum);
  const error = target - output;

  
  w = w + lr * error * a;

  tick++;
  console.log(` ${tick} | ${w.toFixed(4)} | ${output} |  ${error}`);

  if (error === 0 || tick >= 100) {
    clearInterval(the);
  }
}, 100);

let sum = 0.5;

function nerveCell(sum) {
  if (sum <= 0.2) { return 0; } else { return 1; }
}
let tick = 0;
const the = setInterval(() => {
  sum = sum - 0.01;
  tick++;
  console.log(sum.toFixed(3), nerveCell(sum));
  if (tick >= 50) {
    clearInterval(the);
  }
}, 100);

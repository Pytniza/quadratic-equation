module.exports = function solveEquation(equation) {
  let arr = equation.split(' ');
  let arr2 = [];
  arr2.push(Number(arr[0]))
  for (let i = 1; i < arr.length; i++){
    if (Number(arr[i])) arr2.push(Number(arr[i-1] + arr[i]));
  }
  let [a,b,c] = [...arr2];
  let d = b * b - 4 * a * c;
  let r = [];
  r.push(Math.round((-b + Math.sqrt(d)) / (2 * a)));
  r.push(Math.round((-b - Math.sqrt(d)) / (2 * a)));
  return r.sort((a, b) => a - b);
}
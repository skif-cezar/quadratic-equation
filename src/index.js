module.exports = function solveEquation(equation) {
  // your implementation
  var s = equation.split('*').join().split('x').join().split('^2').join().split(',');
var res = s.filter(function(n){
  if(n != '' && n != ' ') return n;
});
var a = parseInt(res[0].replace(/\s+/g,''));
var b = parseInt(res[1].replace(/\s+/g,''));
var c = parseInt(res[2].replace(/\s+/g,''));
var D = Math.pow(b,2) - 4*a*c;
var znam = 2*a;
var x1 = Math.round((-b - Math.sqrt(D))/znam);
var x2 = Math.round((-b + Math.sqrt(D))/znam);
var arr = [x1, x2];
function Num(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
arr.sort(Num);
return arr;
}

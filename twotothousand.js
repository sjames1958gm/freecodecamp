function times2() {
let sum, remain = 0;
for (let i = this.length - 1; i >= 0; i--) {
   sum = this[i] * 2 + remain;
   this[i] = sum % 10;
   remain = Math.floor(sum / 10)
}
if (remain) this.unshift(remain);
return this;
}

var arr = [1]
for (let i = 0; i < 1000; i++) {
  arr = times2.call(arr);
}

console.log(arr.reduce((a, c) => a + c));

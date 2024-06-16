setTimeout(function timer() {
  console.log("2s");
}, 5000);

console.log("hi");

setTimeout(() => {
  console.log("5s");
},10000);
console.log("welcome");

//odd num

var y = [1, 2, 3, 4, 5, 6, 7];

var odd = (array) => {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      arr.push(array[i]);
    }
  }
  return arr;
};
console.log(odd(y));

// uppercase 

var str = "who are you";
let R = (str) => {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
console.log(R(str));

//Sum of all numbers in an array

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
let ghi = (a) => {
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  return sum;
};
console.log(ghi(a));

//prime num
 
let n = 34;
let r = (n) => {
  for (let i = 2; i <= n; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      console.log(i);
    }
  }
};
console.log(r(n));

//palindrome

var isPalindrome = (N) => {
  let str = "" + N;
  let len = str.length;
  for (let i = 0; i < parseInt(len / 2, 10); i++) {
      if (str[i] != str[len - 1 - i])
          return false;
  }
  return true;
};

isPalindrome(1, 2, 3);
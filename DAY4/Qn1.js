var array = [1,2,3,4,5,6,7,8,9]
//a.anonymus
var a = function (array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      console.log(array[i]);
    }
  }
};
a(array);

//a.IIFE

(function (array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      console.log(array[i]);
    }
  }
})(array); 

//b.anonymous

var str = "who are you";
var def = function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
def(str);

//b.IIFE

var str = "who are you";
(function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
})(str);

//c.anonymous

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var sum = 0;
var abc = function (a) {
    for (var i = 0; a < a.length; i++) {
        sum = sum + a[i];
 
    }
    return sum;
};
abc(a)

//IIFE

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
(function (a) {
  for (var i = 0; a < a.length; i++) {
    sum = sum + a[i];
  }
  return sum;
})(a);

//d.anonymous

var a = 50;
var P = function (a) {
  for (let i = 2; i <= a; i++) {
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
P(a);

//IIFE

let n = 50;
(function (n) {
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
})(n); 

//e.anonymous
var isPalindrome = function (N) {
  let str = "" + N;
  let len = str.length;
  for (let i = 0; i < parseInt(len / 2, 10); i++) {
    if (str[i] != str[len - 1 - i]) return false;
  }
  return true;
}

isPalindrome(1, 2, 3)

// IIFE

(function (N) {
  let str = "" + N;
  let len = str.length;
  for (let i = 0; i < parseInt(len / 2, 10); i++) {
    if (str[i] != str[len - 1 - i]) return false;
  }
  return true;
})(1, 2, 3, 4);

// f & g.anonymous

var arr = [1, 3, 2, 2, 2, 4, 4, 4, 5];

var R = function (array) {
  var dup = [...new Set(array)];
  console.log(dup);
};
R(arr);

// IIFE

var arr = [1, 3, 2, 2, 2, 4, 4, 4, 5];

(function (array) {
  var dup = [...new Set(array)];
  console.log(dup);
})(arr);

//h.anonymous

var a = [1, 2, 3, 4, 5];
var n = a.length;
var k = 2;

var R = function (a, n, k) {
  k = k % n;

  for (let i = 0; i < n; i++) {
    if (i < k) {
      console.log(a[n + i - k] + " ");
    } else {
      console.log(a[i - k] + " ");
    }
  }
};

R(a, n, k);

//IIFE

var a = [1, 2, 3, 4, 5];
var n = a.length;
var k = 2;

(function (a, n, k) {
  k = k % n;

  for (let i = 0; i < n; i++) {
    if (i < k) {
      console.log(a[n + i - k] + " ");
    } else {
      console.log(a[i - k] + " ");
    }
  }
})(a, n, k);



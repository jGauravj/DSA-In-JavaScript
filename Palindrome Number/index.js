// Palindrome number
// Input = 121 => true;
// Explaination = 121 reads as 121 from left to right and from right to left.
// Input = 10 => false;
// F(n) = F[n-1] + F[n-2];

var IsPalindrome = function (x) {
  return x<0 ? false : x === +x.toString().split("").reverse().join("");
}

const res = IsPalindrome(140);
console.log(res);
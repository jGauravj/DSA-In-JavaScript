// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Input num = [-4,-1,0,3,4,5];
// output = [0, 1, 9, 16, 25];

var sortedSquares = function (nums) {
  const res = nums.map((num) => num * num).sort((a, b) => a - b);
  console.log(res);
};

sortedSquares([-4, -1, 0, 3, 4, 5]);

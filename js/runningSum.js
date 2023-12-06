/**
 * @param {number[]} nums
 * @return {number[]}
 */

nums = [1, 1, 1, 1, 1];
let newNumber = [];
let sum = [nums.length];
const runningSum = function (nums) {
  sum[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum[i] = nums[i] + sum[i - 1];
  }
  return sum;
};

const noSecondArray = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums;
};

console.log(runningSum(nums));
console.log(noSecondArray(nums));

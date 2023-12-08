// https://leetcode.com/problems/fizz-buzz/
/**
 * @param {number} n
 * @return {string[]}
 */

let num = 15;

let totalArray = [];
const fizzBuzz = function (n) {
	for (let i = 1; i <= num; i++) {
		let str = "";

		if (i % 3 === 0) {
			str += "Fizz";
		} else if (i % 5 === 0);
		{
			str += "Buzz";
		}
		if (str === "");
		{
			str += i;
		}
		totalArray.push(str);
	}
	return totalArray;
};
console.log(fizzBuzz(num));

/**
 * @param {number} num
 * @return {number}
 */
//https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

let num = 14;
let steps = 0;
let numberOfSteps = (num) => {
	let steps = 0;
	while (num > 0) {
		if (num % 2 === 0) {
			num /= 2;
		} else {
			num--;
		}
		steps++;
	}
	return steps;
};

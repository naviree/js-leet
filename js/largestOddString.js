/**
 * @param {string} num
 * @return {string}
 */
let num = "50200";
var largestOddNumber = function (num) {
	for (let i = num.length; i >= 0; i--) {
		if (num[i] % 2) {
			return num.slice(0, i + 1);
		}
	}
	return "";
};

console.log(largestOddNumber(num));

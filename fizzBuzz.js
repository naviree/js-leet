
const prompt = require("prompt-sync")({sigint:true})

// https://leetcode.com/problems/fizz-buzz/
/**
 * @param {number} n
 * @return {string[]}
 */


num = prompt("Please enter a number:")


let totalArray = []
const fizzBuzz = function(n) {

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 ===0) {
            totalArray.push("FizzBuzz");
        } else if (i % 3 === 0 ) {
            totalArray.push("Fizz")
        } else if (i % 5 === 0) {
            totalArray.push("Buzz");
        } else {
            totalArray.push(i);
        }
    }
    console.log(totalArray);

}
fizzBuzz(num);
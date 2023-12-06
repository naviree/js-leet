
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
        let str = "";

        if (i % 3 === 0) {
            str += "Fizz"
        }
        if (i % 5 === 0) {
            str += "Buzz"
        }
        if (str === ""){
            str += `${i}`
        }
        totalArray.push(str);
    }
    console.log(totalArray);

}

fizzBuzz(num);
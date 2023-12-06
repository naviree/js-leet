
const prompt = require("prompt-sync")({sigint:true})

// https://leetcode.com/problems/fizz-buzz/
/**
 * @param {number} n
 * @return {string[]}
 */


num = prompt("Please enter a number:")


let totalArray = []
const fizzBuzz = function(n) {

    for(let i = 1; i <= num; i++){
        totalArray.push(i.toString());
    }
    console.log(totalArray)

    if (num % 3 === 0) {


    }
};

fizzBuzz(num);
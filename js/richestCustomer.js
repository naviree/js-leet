const accounts = [
    [1, 5],
    [7, 3],
    [3, 5],
];

const maximumWealth = function (accounts) {
    // there is going to be two arrays
    // iterate through both arrays and add each one
    // compare the total of each array
    let total = 0;
    for (let i = 0; i < accounts.length; i++) {
        let innerAccounts = accounts[i];
        let sum = 0;
        for (let j = 0; j < innerAccounts.length; j++) {
            sum += innerAccounts[j];
            if (total < sum) {
                total = sum;
            }
        }
    }
    return total;
};
console.log(maximumWealth(accounts));

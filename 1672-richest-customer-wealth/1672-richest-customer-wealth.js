/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for (let customer of accounts) {
        let customerWealth = 0;
        for (let bankAccount of customer) {
            customerWealth += bankAccount;
        }
        maxWealth = Math.max(maxWealth, customerWealth);
    }

    return maxWealth;
};
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let cont = 0;

    while (num > 0) {
        if (num % 2 === 0) {
            num = num / 2;
            cont += 1;
        } else {
            num = num - 1;
            cont += 1;
        }
    }

    return cont;
};
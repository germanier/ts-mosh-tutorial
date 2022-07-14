"use strict";
let numbers = [1, 2, 3];
function calculateTax(income, taxYear = 2022) {
    let taxRate = 0.0, tax = 0;
    while (income > 0) {
        income -= 10000;
        tax += 10000 * taxRate;
        if (taxRate < 0.6) {
            taxRate += 0.1;
        }
    }
    return 0;
}
calculateTax(20000);
let employee = {
    id: 1,
    name: 'Bob',
    retire: (date) => {
        console.log(date);
    }
};
//# sourceMappingURL=index.js.map
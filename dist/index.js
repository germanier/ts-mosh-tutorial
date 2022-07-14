"use strict";
var _a;
let age = 20;
if (age < 50)
    age += 10;
let sales = 123456789;
let course = 'ts';
let is_free = true;
let level;
function render(document) {
    console.log(document);
}
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
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer !== null && customer !== undefined)
    console.log(customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let logo = null;
logo === null || logo === void 0 ? void 0 : logo('a');
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
//# sourceMappingURL=index.js.map
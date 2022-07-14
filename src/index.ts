// initial types
let age: number = 20;
if (age < 50)
    age +=10;

let sales = 123456789;
let course = 'ts';
let is_free = true; 
let level;

function render(document: any) {
    console.log(document);
}

//list of items
let numbers:number[] = [1, 2, 3]
// enums - k/v
const enum Size {Small = 1, Medium, Large}
// function
function calculateTax(income: number, taxYear: number = 2022): number {
    let taxRate = 0.0, tax = 0
    while (income > 0) {
        income -= 10000
        tax += 10000 * taxRate
        if (taxRate < 0.6){
            taxRate += 0.1
        }
    }
    return 0
}
calculateTax(20000)

// objects v1
let employee: {
    readonly id: number,
    name: string
    retire: (date: Date) => void
} = { 
    id: 1,
    name: 'Bob',
    retire: (date:Date) => {
        console.log(date);
    }
};

// objects v2 . DRY // create custom type
type Employee = {
    readonly id: number,
    name: string
    retire: (date: Date) => void    
}
// union type
function kgToLbs(weight:number | string): number {
    if (typeof weight === 'number') {
        return weight * 2.2
    }
    else {
        return parseInt(weight) * 2.2
    }
}

// intersection
type Draggable = {
    drag: () => void
};
type Resizable = {
    resize: () => void
};
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// literal types:  can only be discrete, one of two values, say.
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// nullable  type
function greet(name: string | null | undefined) {  
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(undefined)

// optional chaining

type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date()};
}
// bad implementation
let customer = getCustomer(0);
if (customer !== null && customer !==undefined)
console.log(customer.birthday);

// better implementation : optional property access
console.log(customer?.birthday?.getFullYear())

// optional element access operator
//customers?.[0]

//optional call
let logo: any = null
logo?.('a');

let speed:  number | null = null;
let ride = {
    // Falsy values in js: (undefined, null, '', false, 0)
//    speed: speed || 30 // problem is 0 is cast as 30 in this way!
    speed: speed ?? 30 // this is better because doesnt have the above error
}

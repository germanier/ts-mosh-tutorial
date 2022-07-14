let numbers:number[] = [1, 2, 3]

const enum Size {Small = 1, Medium, Large}

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


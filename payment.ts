//export example module
//export keyword to export function
export function addPayment(val: number) {
    console.log(val);
}

//if we want to export classes
export default class Payment {
    constructor(val: number) {}
}

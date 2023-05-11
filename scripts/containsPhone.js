function constainsPhone(number) {
    const pattern = /(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}/
    return pattern.test(number);
}
console.log(constainsPhone("This is My Phone Number: 1234567890"));
console.log(constainsPhone("This is My Phone Number: 123-456-7890"));
console.log(constainsPhone("This is My Phone Number: 123 456 7890"));
console.log(constainsPhone("This is My Phone Number: (123) 456-7890"));
console.log(constainsPhone("This is My Phone Number: (123)456-7890"));
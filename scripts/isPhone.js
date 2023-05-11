function isPhone(number) {
    const pattern = /^(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
    return pattern.test(number);
}

const phoneNumber = prompt("Enter a Phone Number: ");
if(isPhone(phoneNumber)) {
    console.log("True");
}
else {
    console.log("False");
}
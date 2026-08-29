const calculator = (a, b, op) => {
    if (op === "+") {
        console.log(a + b);
    } else if (op === "-") {
        console.log(a - b);
    } else if (op === "*") {
        console.log(a * b);
    } else if (op === "/") {
        console.log(a / b);
    } else {
        console.log("Invalid Operator")
    }
};

calculator(5, 10, "+");
calculator(5, 10, "-");
calculator(5, 10, "*");
calculator(5, 10, "/");

const printName = (name) => {
    console.log("Kia Hal Hai " + name)
}; {
    if (name[0] === "a" || name[0] === "A") {
        console.log(name)
    }
}

printName("Ali");
printName("Ahmed");
printName("Waleed");
printName("Athar");
//Part 1

function greet(name = "stranger"){
    return `Hello there ${name}`;
}
console.log(greet("John"));
console.log(greet("Jennifer"));
console.log(greet());


// Part 2

function addNumbers(numb1, numb2) {
    return numb1 + numb2;
}
console.log(addNumbers(6, 7));
console.log(addNumbers(13, 28));

// Part 3

let tag = "Mitch";

function inGameName() {
    let tag = "Mirth";
    return tag;
}
console.log(tag);
console.log(inGameName());

// Part 4

function outerFunction() {
    let count = 0;
    return {
        increase() {
            count++;
            console.log(count);
        }
    }
}
let counter = outerFunction();
counter.increase();
counter.increase();

function outerFunction2() {
    let toppings = ["Pepperoni", "Cheese"]
    return {
        addtopping(newTopping = "MissingTopping") {
            if (newTopping != "MissingTopping") {
                toppings.push(newTopping);
            }
            console.log(toppings);
        },
        removetopping() {
            if (toppings.length >= 1) {
                toppings.pop;
            }
            console.log(toppings);
        }
    }       
}

let pizza = outerFunction2();
pizza.addtopping("Mushroom");
pizza.addtopping("Peppers");
pizza.removetopping();
pizza.addtopping("Onions");
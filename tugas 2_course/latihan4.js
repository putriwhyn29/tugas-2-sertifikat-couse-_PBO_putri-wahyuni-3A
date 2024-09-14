console.log("connected with external JS file");

// Loop and log numbers 0 to 4
for (let n = 0; n < 5; n++) {
    console.log(n);
}

// Variable example
var name = "putri";

// Correctly using template literals
console.log(`${name} is 20 yrs old`);
console.log(`${name} is 20 yrs old`); // Both lines are the same, so one can be omitted

// Object example
var obj = {
    name: "putri",
    roll_no: 10,
    sing() {
        console.log(`${this.name} sings`);
    }
};

// Access object properties
console.log(obj.name);
obj.sing();
console.log(obj["roll_no"]);

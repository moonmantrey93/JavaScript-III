/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding = The scope who every other scope is a closure of
* 2. Implicit Binding = When no new object is created, you are just using the method of the singular object
* 3. New Binding = when a constructor function is used this refers to the object created by this function
* 4. Explicit Binding = we use apply, bind, and call to force this to be a defined object
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log('this is this');



// Principle 2
// code example for Implicit Binding
const chatBot = {
    message: "Hello",
    sayMessage: function() {
        console.log(this.message);
        console.log(this);
    }
}

chatBot.sayMessage();



// Principle 3
// code example for New Binding
class Example {
    constructor(message, name) {
        this.message = message;
        this.name = name;
    }

    speak() {
        console.log(`${this.message}, I am ${this.name}`);
    }
}

const justin = new Example("Hello world", "Justin!");
justin.speak();



// Principle 4
// code example for Explicit Binding

setTimeout(justin.speak, 5000); // will print undefined because this belongs to scope timeout....


setTimeout(justin.speak.bind(justin), 5000); //but we can do this

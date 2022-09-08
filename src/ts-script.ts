function sayHelloWorld(): void {
    console.log("\n");
    console.log("*** Hello World from Type Script code. ***");
    console.log("\n");
}

sayHelloWorld();

// 1. Select the div element using the id property

const app = document.getElementById("app");
// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");
// 3. Add the text content
p.textContent = "Hello, tp!";
// 4. Append the p element to the div element
app?.appendChild(p);


const a: number | undefined = undefined;
const b: number = a!;
console.log(b);

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = {firstName: "Jane", lastName: "User"};

document.getElementById("app").innerHTML = greeter(user);

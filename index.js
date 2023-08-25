// Iteration 1: Names and Input
const hacker1 = "Luis";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Rafael";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else {
    console.log(`Wow, you both have equally long names, XX characters!`)
}

// Iteration 3: Loops
//3.1
const hacker11 = hacker1.toUpperCase()

let char = ""
for (let i = 0; i < hacker11.length; i++) {
    char += hacker11[i] + " ";
}
console.log(char.trim());

//3.2
let back = ""
for (let i = hacker1.length - 1; i >= 0; i--) {
    back += hacker1[i];
}
console.log(back);

//3.3
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
}

else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first, definitely.")
}

else {
    console.log("What?! You both have the same name?");
}
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


//Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lacus metus, et sagittis ex suscipit id. Integer feugiat, diam eu tempor suscipit, libero urna euismod turpis, eget condimentum ipsum ligula at est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean non cursus neque. Curabitur vel ex lobortis urna sagittis interdum mattis ut lorem. Maecenas eros dolor, sollicitudin quis nibh quis, ornare pulvinar nulla. Curabitur non tincidunt nunc, in tincidunt urna. Quisque placerat volutpat lacus id tincidunt. Fusce pulvinar nec orci eget mollis. Quisque eu lorem eu nibh placerat scelerisque sit amet vitae sem. In pharetra semper nunc, at varius orci feugiat quis. Nunc pretium est eu erat elementum ornare. Suspendisse varius nisi pretium sapien gravida congue. Maecenas non neque sed leo tempus pharetra ut quis urna. Mauris quis commodo est. Ut tincidunt nisi sit amet mi placerat, rutrum sodales ligula luctus. Nulla a lacus neque. Proin a porttitor lectus, sed volutpat tellus. Cras justo mauris, bibendum ac lectus sed, auctor cursus risus. Morbi id enim maximus, gravida dolor a, placerat nulla. Aenean consectetur purus eros, quis iaculis sapien pulvinar vel. Morbi eu facilisis ipsum. In cursus ut leo in accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "

let words = "";
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        words++;
    }
}

console.log("Words:", words);


let wordEt = "";
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === "e" && longText[i+1] === "t" && longText[i-1] === " " && longText[i+2] === " ") {
        wordEt++;
    }
}

console.log("Word et:", wordEt);


//Bonus 2

let phraseToCheck = "step on no pets"

//remove spaces
let phraseToCheckNoSpaces = ""
for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] !== " ") {
        phraseToCheckNoSpaces += phraseToCheck[i];
    } 
}
//console.log(phraseToCheckNoSpaces);

//string in backwards

let phraseToCheckInBackwards = ""
for (let i = phraseToCheckNoSpaces.length - 1; i >= 0; i--) {
    phraseToCheckInBackwards += phraseToCheckNoSpaces[i];
}
//console.log(phraseToCheckInBackwards);

if (phraseToCheckNoSpaces === phraseToCheckInBackwards) {
    console.log("It's a Palindrome!");
}

else {
    console.log("It's not a Palindrome!")
}

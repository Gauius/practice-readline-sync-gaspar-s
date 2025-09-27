const readline = require("readline-sync");

let userName = readline.question("What is your name: ");

console.log("Hello " + userName);

console.log("Lets start the quiz.");

let quizScore = 0;
const answerToNumber1 = "boolean";
const answerToNumber2 = "string";
const answerToNumber3 = "number";
const answerToNumber4 = "object";
const answerToNumber5 = "array";
const answerToNumber6 = 0;

let questionNo1 = readline.question(
  "What data type is used to represent a logical truth or falsehood state?"
);
if (questionNo1.toLowerCase() == answerToNumber1) {
  quizScore++;
  console.log("Correct");
}
let questionNo2 = readline.question(
  "What data type is used to represent text?"
);
if (questionNo2.toLowerCase() == answerToNumber2) {
  quizScore++;
  console.log("Correct");
}
let questionNo3 = readline.question(
  "What data type is used to represent a number or integer?"
);
if (questionNo3.toLowerCase() == answerToNumber3) {
  quizScore++;
  console.log("Correct");
}
let questionNo4 = readline.question(
  "What data type is used to represent a collection of data and composed of key-value pairs?"
);
if (questionNo4.toLowerCase() == answerToNumber4) {
  quizScore++;
  console.log("Correct");
}
let questionNo5 = readline.question(
  "What data type is restored as ordered list of values?"
);
if (questionNo5.toLowerCase() == answerToNumber5) {
  quizScore++;
  console.log("Correct");
}
let questionNo6 = readline.question(
  "What is the number that considered as falsy?"
);
if (questionNo6.toLowerCase() == answerToNumber6) {
  quizScore++;
  console.log("Correct");
}

console.log("You scored " + quizScore + " out of 6. ");

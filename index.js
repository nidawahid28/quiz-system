#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to my quiz app!");
console.log("You are required to gain a maximum of 4 points to win.");
let points = 0;
// question 1
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "TypeScript is a superset of?",
        type: "list",
        choices: ["Python", "C++", "Java", "JavaScript"]
    }
]);
if (question1.one == "JavaScript") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect answer");
}
// question 2
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "Who is the founder of Microsoft?",
        type: "list",
        choices: ["Elon Musk", "Bill Gates", "Mark", "Ali"]
    }
]);
if (question2.two == "Bill Gates") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect answer");
}
// question 3
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "What is the name of the capital of Pakistan?",
        type: "list",
        choices: ["Karachi", "Lahore", "Islamabad", "Murree"]
    }
]);
if (question3.three == "Islamabad") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect answer");
}
// question 4
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "Who is the current governor of Sindh?",
        type: "list",
        choices: ["Kamran Tessori", "Saleem Haider", "Faisal Karim", "Sheikh Jaffar"]
    }
]);
if (question4.four == "Kamran Tessori") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect answer");
}
// question 5
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "What is the national language of Pakistan?",
        type: "list",
        choices: ["English", "Punjabi", "Sindhi", "Urdu"]
    }
]);
if (question5.five == "Urdu") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect answer");
}
// Output conditions
if (points >= 4) {
    console.log("Congratulations!");
    console.log(`Your points: ${points}`);
}
else {
    console.log("You lost! Try again next time.");
    console.log(`Your points: ${points}`);
}

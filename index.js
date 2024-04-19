#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    { message: "select one of the operator to perform ation",
        type: "list",
        name: "operators",
        choices: ["Addition", "subtrction", "Multiplication", "Division"]
    },
]);
if (answer.operators === "Addition") {
    console.log(answer.FirstNumber + answer.secondNumber);
}
else if (answer.operators === "subtraction") {
    console.log(answer.FirstNumber - answer.secondNumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.FirstNumber * answer.secondNumber);
}
else if (answer.operators === "Division") {
    console.log(answer.FirstNumber / answer.secondNumber);
}
else {
    console.log("Please select Valid Operator");
}

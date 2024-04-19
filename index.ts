#! /usr/bin/env node

import inquirer from "inquirer"

const answer = await inquirer.prompt([
    { message:"Enter First Number", type: "number", name: "FirstNumber"},
    { message:"Enter Second Number", type: "number", name:"secondNumber"},
    { message:"select one of the operator to perform ation", 
    type:"list", 
    name:"operators",
     choices:["Addition","subtrction","Multiplication","Division"]
    },
]);

if (answer.operators === "Addition") {
    console.log( answer.FirstNumber + answer.secondNumber)
}

else if (answer.operators === "subtraction") {
    console.log( answer.FirstNumber - answer.secondNumber)
}

else if (answer.operators === "Multiplication") {
    console.log( answer.FirstNumber * answer.secondNumber)
}

else if (answer.operators === "Division") {
    console.log( answer.FirstNumber / answer.secondNumber)
}

else {
    console.log("Please select Valid Operator")
}
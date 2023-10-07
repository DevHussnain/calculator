#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res)=>{
        setTimeout(res,2000)
    })
}

async function welcome() {
    let animation = chalkAnimation.rainbow("Calculator By Hussnian")
    await sleep()
    animation.stop()
    console.log(`
 _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
    `)
}
await welcome();

async function askQuestion() {
    let answers = await inquirer
    .prompt([
        {
            type : "list",
            name : "opearator",
            message : "What Function do you prefer",
            choices : ["Addition","Substraction","Multiplication","Division","Exponantional"]
        },
        {
            type : "number",
            name : "num1",
            message : "Enter First Number:"
        },
        {
            type : "number",
            name : "num2",
            message : "Enter Second Number:"
        }
    ])
    if (answers.opearator == "Addition") {
        console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`)
    } else if (answers.opearator == "Substraction") {
        console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`)
    } else if (answers.opearator == "Multiplication") {
        console.log(`${answers.num1} x ${answers.num2} = ${answers.num1 * answers.num2}`)
    } else if (answers.opearator == "Division") {
        console.log(`${answers.num1} ÷ ${answers.num2} = ${answers.num1 / answers.num2}`)
    } else if (answers.opearator == "Exponantional") {
        console.log(`${answers.num1} % ${answers.num2} = ${answers.num1 % answers.num2}`)
    }
}

async function startit() {
    do{
        await askQuestion();
        var again = await inquirer
        .prompt([
            {
                type : "input",
                name : "restart",
                message : "If you want to calculate again press y and if not press n ! Thank you: "
            }
        ])
    } while (again.restart == "y" ||again.restart ==  "yes" ||again.restart == "Yes" ||again.restart == "Y" ||again.restart == "YES")
}
startit()
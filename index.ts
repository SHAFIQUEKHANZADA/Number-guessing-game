#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//number gussing game
let num = Math.floor(Math.random()* 5 + 1)
let gusse = await inquirer.prompt([{
    name: "guss",
    type: "number",
    message: "Guess a number between 1 to 5:"
}])

if (gusse.guss === num) {
    console.log(chalk.underline.bgGreenBright("Congrats, You guessed right number!"));
} else {
    console.log(chalk.underline.bgBlueBright("You guessed wrong number, please try again!"));  
}
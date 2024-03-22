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

if (gusse.guss > num) {
    console.log(chalk.underline.bgBlueBright("Your number is high!"));
} else if (gusse.guss < num) {
    console.log(chalk.underline.bgBlueBright("Your number is Low!"));
} else if (gusse.guss === num) {
    console.log(chalk.underline.bgBlueBright("Congats, You guessed the  right number!"));
 } else {
    console.log(chalk.underline.bgCyanBright("You guessed wrong number, please try again!"));  
}
#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 100000;
let password = 5151;

let userInput = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "ENTER ATM PASSWORD.",
  },
]);

if (userInput.pin === password) {
  console.log(chalk.green(`\n\t\tYOUR PIN CODE IS MATCHED.\n`));

  console.log(
    chalk.yellow(`============================================\n    ACCOUNT OWNER NAME IS: "RAHEEM VEER"
============================================`)
  );

  let userInpur2 = await inquirer.prompt([
    {
      name: "option",
      message: "WHAT YOU WANT TO CHOOSE:",
      type: "list",
      choices: ["WITHDRAW", "CURRENT BALANCE"],
    },
  ]);

  if (userInpur2.option === "WITHDRAW") {
    let userInput3 = await inquirer.prompt([
      {
        name: "suggestions",
        type: "list",
        message:
          "YOU HAVE TWO OPTIONS TO WITHDRAW YOUR AMOUNT CHOICE IS YOURS:",
        choices: ["ATM SUGGESTED AMOUNT", "YOU OWN SELECT YOUR AMOUNT"],
      },
    ]);
    if (userInput3.suggestions === "ATM SUGGESTED AMOUNT") {
      let suggestionsAmount = await inquirer.prompt([
        {
          name: "atmSuggest",
          message: "ATM SUGGESTED AMOUNT IS:",
          type: "list",
          choices: [5000, 10000, 50000, 100000],
        },
      ]);
      if (myBalance >= suggestionsAmount.atmSuggest) {
        console.log(
          chalk.yellow(
            `YOUR REMANING AMOUNT IS. ${(myBalance -=
              suggestionsAmount.atmSuggest)}`
          )
        );
      } else {
        console.log(
          chalk.red(
            `YOU DON'T HAVE MONEY TO WITHDRAW. YOUR CURRENT BALANCE IS: ${myBalance}`
          )
        );
      }
    } else if (userInput3.suggestions === "YOU OWN SELECT YOUR AMOUNT") {
      let selectedAmount = await inquirer.prompt([
        {
          name: "yourSelected",
          type: "number",
          message: "ENTER YOUR AMOUNT YOU WANT TO WITHDRAW:",
        },
      ]);
      if (myBalance >= selectedAmount.yourSelected) {
        console.log(
          chalk.yellow(
            `YOUR REMANING AMOUNT IS. ${(myBalance -=
              selectedAmount.yourSelected)}`
          )
        );
      } else {
        console.log(
          chalk.red(
            `YOU DON'T HAVE MONEY TO WITHDRAW.YOUR CURRENT BALANCE IS ${myBalance}`
          )
        );
      }
    }
  } else if (userInpur2.option === "CURRENT BALANCE") {
    console.log(
      chalk.green(`===================================\nYOUR CURRENT BALANCE IS: ${myBalance}
===================================`)
    );
  }
}else{
  console.log(chalk.red(`ATM PASSWORD IS NOT MATCHED.`))
}

//Starts and coordinates the program

import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";

import {isValidIncome, errorFunction, calculateTax} from "./taxCalculator.js" //.js because when node executes it, it sees a .js code

const terminal = createInterface({
    input: stdin,
    output: stdout,
});

terminal.question("Type your income: ", (answer: string) => {
    const income = Number(answer); //it's important to remember, in the terminal, everything typed is text, so we must convert this text ( in our logic ) to a number using this function Number()
    let tax: number;

    if (isValidIncome(income)){
        tax= calculateTax(income);
        console.log("You receive: $", income,", so you must pay: $", tax);
    }

    else{
        errorFunction();
    }

    terminal.close();
});

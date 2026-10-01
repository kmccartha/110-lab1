import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let money: number = 20;
let lemonade: number = 10;
let price: number = 1;

console.log("Welcome to the Lemonade Stand");
console.log("You have $" + money);
console.log("You have " + lemonade + " cups of lemonade");
rl.question("How much do you want to charge per cup? ", (answer) => {
    price = Number(answer);

    console.log("You are charging $" + price + " per cup.");

    rl.close();
});

let customers: number = Math.floor(Math.random() * 10) + 1;
console.log(customers + " customers came to your stand!");

let sold: number = Math.min(customers, lemonade);
let earnings: number = sold * price;
money = money + earnings;

lemonade = lemonade - sold;

console.log("You sold " + sold + " cups.");
console.log("You earned $" + earnings);
console.log("You now have $" + money);
console.log("You have " + lemonade + " cups left.");

rl.close();

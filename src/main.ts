import { createInterface } from "readline/promises";
import { LemonadeStand } from "./LemonadeStand";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const stand = new LemonadeStand();

async function main() {
    console.log("Welcome to the Lemonade Stand Game!");

    for (let day = 1; day <= 7; day++) {
        console.log(`\n===== DAY ${day} =====`);

        const options = ["hot", "good weather", "cold"];
        const temperature = options[Math.floor(Math.random() * options.length)];
        console.log(`Today's weather is ${temperature}.`);

        let cupsSold;
        if (temperature === "hot") {
            cupsSold = Math.floor(Math.random() * 11) + 10;   // 10-20 cups
        }
        else if (temperature === "good weather") {
            cupsSold = Math.floor(Math.random() * 6) + 5;     // 5-10 cups
        }
        else {
        cupsSold = Math.floor(Math.random() * 4) + 2;     // 2-5 cups
        }

        const cupPrice = Math.floor(Math.random() * 3) + 1;
        const icePrice = Math.floor(Math.random() * 2) + 1;
        const lemonPrice = Math.floor(Math.random() * 3) + 1;
        const sugarPrice = Math.floor(Math.random() * 2) + 1;

        console.log("\nToday's supply prices:");
        console.log(`Cups: $${cupPrice}`);
        console.log(`Ice: $${icePrice}`);
        console.log(`Lemons: $${lemonPrice}`);
        console.log(`Sugar: $${sugarPrice}`);

        console.log(`\nCurrent cash: $${stand.cash.toFixed(2)}`);

        const cups = Number(await rl.question("How many cups do you want to buy? "));
        const ice = Number(await rl.question("How much ice do you want to buy? "));
        const lemons = Number(await rl.question("How many lemons do you want to buy? "));
        const sugar = Number(await rl.question("How much sugar do you want to buy? "));

        const success = stand.buySupplies(
            cups,
            ice,
            lemons,
            sugar,
            cupPrice,
            icePrice,
            lemonPrice,
            sugarPrice
        );

        if (!success) {
            console.log("\nYou don't have enough money for those supplies.");
            console.log("You bought nothing.");
        } else {
            console.log("\nSupplies purchased!");
        }

        const sold = stand.sellCups(cupsSold);

        console.log(`\nYou sold ${sold} cups of lemonade.`);

        console.log("\nRemaining inventory:");
        console.log(stand.getInventory());
    }

    console.log("\n===== GAME OVER =====");
    console.log(`Final cash: $${stand.cash.toFixed(2)}`);

    rl.close();
}

main();

import { Inventory } from "./Inventory";

export class LemonadeStand {
    cash: number;

    cups: number;
    ice: number;
    lemons: number;
    sugar: number;

    Inventory: Inventory;

    constructor() {
        this.cash = 20;

        this.cups = 0;
        this.ice = 0;
        this.lemons = 0;
        this.sugar = 0;

        this.Inventory = new Inventory();
    }

    buySupplies(
        cups: number,
        ice: number,
        lemons: number,
        sugar: number,
        cupPrice: number,
        icePrice: number,
        lemonPrice: number,
        sugarPrice: number
    ): boolean {

        const totalCost =
            cups * cupPrice +
            ice * icePrice +
            lemons * lemonPrice +
            sugar * sugarPrice;

        if (totalCost > this.cash) {
            return false;
        }

        this.cash -= totalCost;

        this.cups += cups;
        this.ice += ice;
        this.lemons += lemons;
        this.sugar += sugar;

        return true;
    }

    sellCups(numberOfCups: number): number {
        const maximumCups = Math.min(
            Math.floor(this.cups / this.Inventory.cupsNeeded),
            Math.floor(this.ice / this.Inventory.iceNeeded),
            Math.floor(this.lemons / this.Inventory.lemonsNeeded),
            Math.floor(this.sugar / this.Inventory.sugarNeeded)
        );

        const cupsSold = Math.min(numberOfCups, maximumCups);

        this.cups -= cupsSold * this.Inventory.cupsNeeded;
        this.ice -= cupsSold * this.Inventory.iceNeeded;
        this.lemons -= cupsSold * this.Inventory.lemonsNeeded;
        this.sugar -= cupsSold * this.Inventory.sugarNeeded;

        this.cash += cupsSold * 1;

        return cupsSold;
    }

    getInventory(): string {
        return `
        Cups: ${this.cups}
        Ice: ${this.ice}
        Lemons: ${this.lemons}
        Sugar: ${this.sugar}
        
        `;
    }
}
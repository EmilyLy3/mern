class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }


    sayName() {
        console.log(this.name);
        return this;
    }


    showStats() {
        for (const property in this) {
            console.log(`${property}: ${this[property]}`);
        }
        return this;
    }


    drinkSake() {
        this.health += 10;
        return this;
    }
}


const ninja1 = new Ninja("Hyabusa", 100);
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();
ninja1.sayName().showStats().drinkSake().showStats();
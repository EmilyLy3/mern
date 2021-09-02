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


class Sensei extends Ninja {
    constructor(name) {
        super(name, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }


    speakWisdom() {
        this.drinkSake();
        console.log("Ninjas don't wish upon a star, they throw them");
        return this;
    }
}


const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// superSensei.showStats();
superSensei.speakWisdom().showStats();
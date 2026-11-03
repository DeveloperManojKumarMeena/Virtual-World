
class Character {

    constructor(name, health, power) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    printDetails() {
        console.log(` 
        ----- ${this.name} -----
        Health: ${this.health}
        Power: ${this.power}
        `);
    }

    attack(target){
        console.log(`Dragon attacked Ninja!`)

    }

}



const dragon = new Character("🐉 Dragon", 200, 90);
const ninja = new Character("🥷 Ninja", 100, 70);


dragon.printDetails();
ninja.printDetails();

dragon.attack()
ninja.attack()
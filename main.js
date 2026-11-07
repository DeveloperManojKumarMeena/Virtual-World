/*
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
        console.log(`${this.name} attacked ${target.name}!`)

        if(target.health<=0){
            console.log(`${target.name} already defeated! attack not allow`)
        }else if(target.health<this.power){
            target.health = 0;
            console.log(`${target.name} has been defeated!`)
        }else{
             console.log(`${target.name} remaining health: ${target.health = target.health - this.power}`)
        }
    }

}



const dragon = new Character("🐉 Dragon", 200, 90);
const ninja = new Character("🥷 Ninja", 100, 70);


dragon.printDetails();
ninja.printDetails();

dragon.attack(ninja)
dragon.attack(ninja)
dragon.attack(ninja)

*/

function one(cb){
    console.log("Function one is called")
    cb()
}
function two(cb){
    console.log("Function two is called")
    cb()
}
function three(cb){
    console.log("Function three is called")
    cb()
}

one(()=>{
    two(()=>{
        three(()=>{
            console.log('all function is called')
        })
    })
})
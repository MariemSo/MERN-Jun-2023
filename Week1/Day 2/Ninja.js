class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this. speed = speed
        this.strength = strength
    }

    sayName(){
        console.log(this.name);
    }
    
    showStats(){
        console.log(this);
    }
    drinkSake(){
        this.health += 10;
        console.log();
    }
}
const ninja1 = new Ninja ("Hybusa");
ninja1.sayName();
ninja1.showStats();

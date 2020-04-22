// Create the Warrior class constructor
class Warrior {
	// Give it expected parameters
	constructor(name, age, weapon, armour) {
		// Set those equal to the instance
		this.name = name;
		this.age = age;
		this.weapon = weapon;
		this.armour = armour;
		this.health = 0;
		this.attack = 10;
	}
	// play method
	play() {
		this.health++
		this.attack--;
		console.log(`This warrior's name is ${this.name}, age is ${this.age}, current health is ${this.health} and current attack level is ${this.attack}.`);
	}
}

// Create Ragnar
const ragnar = new Warrior('Ragnar', 212, 'numchucks', 'chainmail');

// Pat him 5 times
ragnar.play();
ragnar.play();
ragnar.play();
ragnar.play();
ragnar.play();

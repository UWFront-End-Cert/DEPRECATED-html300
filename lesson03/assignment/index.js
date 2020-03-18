// Create the Dog class constructor
class Dog {
	// Give it expected parameters
	constructor(name, age, breed, color) {
		// Set those equal to the instance
		this.name = name;
		this.age = age;
		this.breed = breed;
		this.color = color;
		this.energyLevel = 0;
		this.barkLevel = 10;
	}
	// pat method
	pat() {
		this.energyLevel++
		this.barkLevel--;
		console.log(`This dog's name is ${this.name}, age is ${this.age}, current energy level is ${this.energyLevel} and current bark level is ${this.barkLevel}.`);
	}
}

// Create marty
const marty = new Dog('Marty', 6, 'Mutt', 'Brown');

// Pat him 5 times
marty.pat();
marty.pat();
marty.pat();
marty.pat();
marty.pat();
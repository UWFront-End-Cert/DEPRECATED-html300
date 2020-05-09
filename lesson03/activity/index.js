// Create the video game hero class constructor
class CaptainZero {
	// Give it expected parameters
	constructor(ship, torperdos, music, booze) {
		// Set those equal to the instance
		this.ship = ship;
		this.music = music;
		this.booze = booze;
		this.speed = 500;
		this.shipDamage = 0;
		this.torpedos = 30;
	}
	// fire method
	fire() {
		this.speed++
		this.shipDamage--
		this.torpedos--;
		console.log(`Welcome aboard ${this.ship}, Captain Zero. Your ship has been fully stocked with plenty of ${this.music}
			and an ample supply of ${this.booze}. Protect the universe from Martians. They are on your starboard side.
			Your speed is now ${this.speed} kilometers per hour and damage is ${this.shipDamage} on the damage-o-meter. You have ${this.torpedos} torpedos left.`);

			return `Welcome aboard ${this.ship}, Captain Zero. Your ship has been fully stocked with plenty of ${this.music}
				and an ample supply of ${this.booze}. Protect the universe from Martians. They are on your starboard side.
				Your speed is now ${this.speed} kilometers per hour and damage is ${this.shipDamage} on the damage-o-meter. You have ${this.torpedos} torpedos left.`
	}
}

// Create Zero - Captain Zeros swanky adventure lifestyle
const Zero = new CaptainZero('Vista Space Cruiser', 30, 'Led Zeplin', 'Cosmos');

// attack Martians 5 times
Zero.fire();
Zero.fire();
Zero.fire();
Zero.fire();
Zero.fire();

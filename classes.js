class Animal {              
  
    constructor(name, sound, legs, hasWings, imageURL) {  
        this.name = name;       
        this.sound = sound;
        this.legs = legs;
        this.hasWings = hasWings;
        this.imageURL = imageURL;
    }	


	move()  {
		if (this.hasWings === true) {
			console.log(this.name + " is flying.")
		} else {
			console.log(this.name + " is running.")
		}
	}

	image() {
		document.getElementById("mytext").innerHTML += "<br><img src='"+ this.imageURL + "'>";
	}


    speak() {
        // console.log(this.sound +"! I'm  " + this.name + " and have " + this.legs + " legs.");
    	return (this.sound +"! I'm  " + this.name + " and have " + this.legs + " legs.");
    }
	
}


var lion = new Animal("Simba", "Roar", 4, false, "lion.png");
document.getElementById("mylion").innerHTML = "<h3>" + lion.speak() + "</h3>";

// lion.speak();
lion.move();
// lion.image();

var parrot = new Animal("Zazu", "Squawk", 2, true, "parrot.png");
document.getElementById("myparrot").innerHTML = "<h3>" + parrot.speak() + "</h3>";
// parrot.speak();
parrot.move();
// parrot.image();

var monkey = new Animal("Rafiki", "EEk Eek", 2, false, "monkey.png");
// monkey.speak();
monkey.move();
// monkey.image();

var wildPig = new Animal("Pumbaa", "Oink", 4, false, "wildPig.jpg");
// wildPig.speak();
wildPig.move();
// wildPig.image();










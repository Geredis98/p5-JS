function setup() {
	createCanvas(750, 750);
	background(0);
	var meteor1 = new Meteor();
}

class Meteor	{
	constructor()	{
		this.r = random(10, 40);
		this.x = random(50, 700);
		this.y = 0;
		this.speed = random(5, 20);
		this.speedMultiplier = 1;
	}

	move()	{
		this.y += this.speed * this.speedMultiplier;
	}

	show()	{
		noStroke();
		fill(139, 69, 19);	// RGB of saddlebrown
		ellipse(this.x, this.y, this.r);
	}
}

function draw() {
	meteor1.move();
	meteor1.show();
}

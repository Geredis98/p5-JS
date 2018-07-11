var meteor1;
var shooted = false;

function setup() {
	createCanvas(750, 750);
	meteor1 = new Meteor();
}

class Meteor	{
	constructor()	{
		this.r = random(10, 40);
		this.x = random(50, 700);
		this.y = 0;
		this.speed = random(0.5, 1);
		this.speedMultiplier = 1;
	}

	move()	{
		this.y += this.speed * this.speedMultiplier;
	}

	shoot()	{
		let distance = dist(mouseX, mouseY, this.x, this.y);
		if(distance <= this.r)	{
			shooted = true;
		}
	}

	show()	{
		noStroke();
		if(shooted == false)	{
			fill(139, 69, 19);
		} else {
			fill(0);
		}
		ellipse(this.x, this.y, this.r);
	}
}

function mousePressed()	{
	meteor1.shoot();
}

function draw() {
	background(0);
	meteor1.move();
	meteor1.show();
}

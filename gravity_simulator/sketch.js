let planets = [];

function setup() {
	createCanvas(750, 750);
}

function draw() {
	background(0);
	for (planet of planets)	{
		planet.show();
	}
}

function mousePressed()	{
	planet = new Planet(mouseX, mouseY);
	planets.push(planet);
}

class Planet	{
	constructor(x, y)	{
		this.x = x;
		this.y = y;
		this.r = random(10, 50);
		this.color = color(random(1, 255), random(1, 255), random(1, 255));
		this.gravity = 0.5 * this.r;
		this.xMove = 0;
		this.yMove = 0;
	}

	show()	{
		fill(this.color);
		ellipse(this.x, this.y, this.r);
	}
}

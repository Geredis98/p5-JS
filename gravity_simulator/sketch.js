let planet;
let planetCreated = false;

function setup() {
	createCanvas(750, 750);
}

function draw() {
	background(0);
	if (planetCreated)	{
		planet.show();
	}
}

function mousePressed()	{
	planet = new Planet(mouseX, mouseY);
	planetCreated = true;
}

class Planet	{
	constructor(x, y)	{
		this.x = x;
		this.y = y;
		this.r = random(10, 50);
		this.color = color(random(1, 255), random(1, 255), random(1, 255));
	}

	show()	{
		fill(this.color);
		ellipse(this.x, this.y, this.r);
	}
}

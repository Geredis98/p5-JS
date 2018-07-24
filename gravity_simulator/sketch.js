let planets = [];

function setup() {
	createCanvas(750, 750);
}

function draw() {
	background(0);
	for (planet of planets)	{
		planet.move();
		planet.show();
		planet.determineMovement();
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
		this.moveX = 0;
		this.moveY = 0;
	}

	move()	{
		this.x += 0.0125 * this.moveX;
		this.y += 0.0125 * this.moveY;
	}

	determineMovement()	{
		for (let i = 0; i < planets.length; i++)	{
			if (this.r < planets[i].r)	{
				this.moveX = planets[i].x - this.x;
				this.moveY = planets[i].y - this.y;
			}
		}
	}

	show()	{
		fill(this.color);
		ellipse(this.x, this.y, this.r);
	}
}

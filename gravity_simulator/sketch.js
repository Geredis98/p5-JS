let planets = [];

function setup() {
	createCanvas(750, 750);
}

function draw() {
	background(0);
	for (let i = 0; i < planets.length; i++)	{
		planets[i].move();
		planets[i].show();
		planets[i].determineMovement();
//		planets[i].checkAbsorbation();
//		planets[i].removeAbsorbedPlanet();
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
		this.absorbed = false;
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

	checkAbsorbation()	{
		for (let i = 0; i < planets.length; i++)	{
			if (this.x == planets[i].x && this.y == planets[i].y)	{
				this.absorbed = true;
				planets[i].r += this.r/4;
			}
		}
	}

	removeAbsorbedPlanet()	{
		for (let i = 0; i < planets.length; i++)	{
			if (planets[i].absorbed == true)	{
				planets.splice(i, 1);
			}
		}
	}

	show()	{
		fill(this.color);
		ellipse(this.x, this.y, this.r);
	}
}

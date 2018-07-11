var meteors = [];
var level = 1;
var shooted = false;

function setup() {
	createCanvas(750, 750);
	createLevel(level);
}

function createLevel(level)	{
	for(let i = 0; i < 10; i++)	{
		let meteor = new Meteor(level);
		meteors.push(meteor);
	}
}

class Meteor	{
	constructor(speedMultiplier)	{
		this.r = random(10, 40);
		this.x = random(50, 700);
		this.y = 0;
		this.speed = random(0.5, 1);
		this.speedMultiplier = speedMultiplier;
	}

	move()	{
		this.y += this.speed * this.speedMultiplier;
	}

	shoot()	{
		let distance = dist(mouseX, mouseY, this.x, this.y);
		if(distance <= this.r)	{
			return true;
		}
	}

	crashTest()	{
		if(this.y >= 750)	{
			alert("GAME OVER!");
		}
	}

	show()	{
		noStroke();
		fill(139, 69, 19);
		ellipse(this.x, this.y, this.r);
	}
}

function mousePressed()	{
	for(let i = 0; i < 10; i++)	{
		if(meteors[i].shoot())	{
			meteors.splice(i, 1);
		}
	}
}

function draw() {
	background(0);
	for(let i = 0; i < 10; i++)	{
		meteors[i].move();
		meteors[i].show();
		meteors[i].crashTest();
	}
}

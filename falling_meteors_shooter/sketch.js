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

function resetLevel()	{
	level++;
	createLevel(level);
}

class Meteor	{
	constructor(speedMultiplier)	{
		this.r = random(15, 30);
		this.x = random(25, 725);
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
			alert("GAME OVER! YOU HAVE REACHED LEVEL: " + level);
		}
	}

	show()	{
		noStroke();
		fill(255, 0, 0);
		ellipse(this.x, this.y, this.r);
	}
}

function mousePressed()	{
	for(let i = 0; i < meteors.length; i++)	{
		if(meteors[i].shoot())	{
			meteors.splice(i, 1);
		}
	}
}

function draw() {
	background(0);
	for(let i = 0; i < meteors.length; i++)	{
		meteors[i].move();
		meteors[i].show();
		meteors[i].crashTest();
	}
	if(meteors.length == 0)	{
		resetLevel();
	}
}

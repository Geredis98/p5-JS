var speed = 5;

var balls = [];

function setup() {
	createCanvas(screen.width, screen.height);
	ball1 = new Ball(width/2, 100, 20);
}

function mousePressed()	{
	ball = new Ball(mouseX, mouseY);
	balls.push(ball);
}

class Ball {
	constructor(x, y)	{
		this.x = x;
		this.y = y;
		this.r = random(15, 50);

		this.red = random(1, 255);
		this.green = random(1, 255);
		this.blue = random(1, 255);

		this.initial = y;
		this.bounced = false;
	}

	move(speed)	{
		this.y += speed;
	}

	bounce()	{
		if(this.y > (this.initial + screen.height)/5)	{
			return true;
		} else {
			this.initial += (this.initial + screen.height)/5;
			return false;
		}
	}

	show()	{
		fill(this.red, this.green, this.blue);
		noStroke();
		ellipse(this.x, this.y, this.r);
	}
}

function draw() {
	background(0);
	for(var i = 0; i < balls.length; i++)	{
		if(balls[i].bounced)	{
			balls[i].move(-speed);
			balls[i].show();
			if(!balls[i].bounce())	{
				balls[i].bounced = false;
			}
		} else {
				balls[i].move(speed);
				balls[i].show();
		}

		if(balls[i].y >= screen.height)	{
			balls[i].bounced = true;
		}
	}
}

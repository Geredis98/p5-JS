var ball1;
var speed = 5;
var initial;
var bounced = false;


function setup() {
	createCanvas(screen.width, screen.height);
	ball1 = new Ball(screen.width/2, 100, 20);
}

class Ball {
	constructor(x, y, r)	{
		this.x = x;
		this.y = y;
		this.r = r;
		this.initial = y;
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
		ellipse(this.x, this.y, this.r);
	}
}

function draw() {
	background(0);
	if(bounced)	{
		ball1.move(-speed);
		ball1.show();
		if(!ball1.bounce())	{
			bounced = false;
		}
	} else {
			ball1.move(speed);
			ball1.show();
	}

	if(ball1.y >= screen.height)	{
		bounced = true;
	}
}

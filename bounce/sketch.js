function setup() {
	createCanvas(1200, 600);
}

class Ball {
	constructor(x, y)	{
		this.x = x;
		this.y = y;
		this.initial = y;
	}

	move()	{
		this.y -= 10;
	}

	bounce()	{
		this.initial /= 2;
		while(this.y < this.initial)	{
			this.y += 10;
		}
	}

	show(x, y)	{
		ellipse(this.x, this.y, 15);
	}
}

function draw() {
	let ball1 = new Ball(mouseX, mouseY);
	background(0);
	ball1.move();
	ball1.show();
	if(ball1.x <= 0)	{
		ball1.bounce();
	}
}

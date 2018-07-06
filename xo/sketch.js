function setup()	{
	createCanvas(750, 750);
}

function draw()	{
	background(0);
	let i = 0;
	while(i <= 750)	{
		fill(255);
		line(i, 0, i, 750);
		i += 5;
	}
}

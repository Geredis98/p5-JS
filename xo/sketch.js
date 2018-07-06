let board_size = 30;
let gameboard = new Array(board_size); // Array containing X and O, used for checking winner

function setup()	{
	createCanvas(750, 750);
	createGameboard(gameboard, board_size);
	background(0);
}

function createGameboard(gameboard, board_size)	{
	for(let i = 0; i < board_size; i++)	{
		gameboard[i] = new Array(board_size);
	}
}

function drawGameboard()	{
	stroke(255);
	let i = 1;
	while(25 * i < 750)	{
		line(25 * i, 0, 25 * i, 750);
		line(0, 25 * i, 750, 25 * i);
		i++;
	}
}

function approximateClick()	{
	
}

function draw()	{
	drawGameboard();
}

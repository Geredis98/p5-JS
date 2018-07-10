let board_size = 30;
let gameboard = new Array(board_size); // Array containing X and O, used for checking winner

function setup()	{
	background(255);
	createCanvas(750, 750);
	createGameboard(gameboard, board_size);
}

function createGameboard(gameboard, board_size)	{
	for(let i = 0; i < board_size; i++)	{
		gameboard[i] = new Array(board_size);
	}

	for(let i = 0; i < board_size; i++)	{
		for(let j = 0; j < board_size; j++)	{
			gameboard[i][j] = 0;
		}
	}
}

function drawGameboard()	{
	stroke(0);
	let i = 1;
	while(25 * i < 750)	{
		line(25 * i, 0, 25 * i, 750);
		line(0, 25 * i, 750, 25 * i);
		i++;
	}
}

function mousePressed()	{
	let x = Math.floor(mouseX / 25);
	let y = Math.floor(mouseY / 25);

	gameboard[x][y] = 1;
}

function drawTurns(gameboard, board_size)	{
	for(let i = 0; i < board_size; i++)	{
		for(let j = 0; j < board_size; j++)	{
			if(gameboard[i][j] == 1)	{
				stroke(1);
				fill(255, 0, 0);
				ellipse(25 * i + 12, 25 * j + 12, 4, 4);
			}
		}
	}
}

function draw()	{
	drawGameboard();
	drawTurns(gameboard, board_size);
}

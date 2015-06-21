
var cards = ['fu1.jpg', 'fu2.jpg', 'fu3.jpg', 'fu4.jpg', 'fu5.jpg', 'fu6.jpg', 'fu7.jpg', 'fu8.jpg', 'fu9.jpg', 'fu10.jpg'];

var board = cards.concat(cards);

for(var i = 0; i < board.length * 2; i++)
{
var temp = 0;
var rand = Math.floor(Math.random() * board.length);
var rand1 = Math.floor(Math.random() * board.length);
 temp = board[rand];
 board[rand] = board[rand1];
 board[rand1] = temp;
}
console.log(board);

var clicked = 0;
var prev = 0;
var current = 0;
var pair = 0;

var makeGrid = function(set) {
var body = document.querySelector("body");

for (var i =0; i<set.length; i++)
{	
		var square = document.createElement("div");
		square.style.width = "15%";
		square.style.height = "120px";
		square.style.border = "2px dotted white";
		square.style.backgroundImage = ('cardBackFUCUC.jpg');
		square.className = set[i];
		square.style.float = "left";
		document.body.appendChild(square);	 
}
};

var makeClickable = function() {
var grid = document.querySelectorAll("div");
	for(var i = 0; i < grid.length; i++)
	{
		grid[i].addEventListener("mousedown", function(){

		if(clicked === 1 && this.id !== 'done')
		{

			this.style.backgroundColor = '#39FF14' + this.className + ')';
			this.style.backgroundSize = 'contain';

			if(pair < 2)
			{
			//this.style.background = "blue";
			this.id = "pair";
			current = this.className;
			clicked = 0;
			pair = 2;
			console.log("previous: " + prev + " \n current: " + current);
			if(prev === current)
			{
				setTimeout(function() 
		{
				console.log('match');
				var pairs = document.querySelectorAll("#pair");
			pairs[0].style.background = "cardBackFUCUC";
			pairs[1].style.background = "cardBackFUCUC";
			pairs[0].id = "done";
			pairs[1].id = "done";
			pairs[0].innerHTML = "";
			pairs[1].innerHTML = "";
			pair = 0;
				
			}, 2000);
		}}
		if(prev !== current)
		{
		setTimeout(function() 
		{ var pairs = document.querySelectorAll("#pair");
			pairs[0].style.background = "cardBackFUCUC";
			paris[1].style.background = "cardBackFUCUC";
			pairs[0].id = "";
			pairs[1].id = "";
			pairs[0].innerHTML = "";
			pairs[1].innerHTML = "";
			pair = 0;
		},
		 2000);
		}}

		else if(clicked < 2 && pair < 2 && this.id !== 'done' )	
		{
		//console.log(this.className);
		//this.style.background = "blue";
		this.style.backgroundSize = 'contain';
		this.style.backgroundImage =  'url(images/' + this.className + ')';
		clicked+=1;
        //this.innerHTML =  this.className;
		this.id = "pair";
		prev = this.className;
		//console.log(prev);
		//console.log(clicked + " in elseif");
	    }
		});
	}
}

makeGrid(board);
makeClickable();
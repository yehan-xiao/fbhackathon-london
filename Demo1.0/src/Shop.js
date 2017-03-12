Candy.Shop = function(game){};
Candy.Shop.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'shopbackground');
		//this.add.button(Candy.GAME_WIDTH-401-10, Candy.GAME_HEIGHT-143-10, 'flower1', this.openCard, this);
		// add the button that will show the card
		//this.add.button(Candy.GAME_WIDTH-401-10, Candy.GAME_HEIGHT-143-10, 'button-next', this.openCard, this);

		//background = this.game.add.tileSprite(0, 0, 400, 400, 'background');

		//this.add.tileSprite(Candy.GAME_WIDTH-401-150, Candy.GAME_HEIGHT-900,200,200,'bqcover');

		var group = this.add.group();

		var lu = this.add.button(Candy.GAME_WIDTH-401-150, Candy.GAME_HEIGHT-900, 'bouquet1', this.onUp, this, 2, 1, 0);
		var ru = this.add.button(Candy.GAME_WIDTH-401+150, Candy.GAME_HEIGHT-900, 'bouquet2', this.onUp, this, 2, 1, 0);
		var ld = this.add.button(Candy.GAME_WIDTH-401-150, Candy.GAME_HEIGHT-300, 'bouquet3', this.onUp, this, 2, 1, 0);
		var rd = this.add.button(Candy.GAME_WIDTH-401+150, Candy.GAME_HEIGHT-300, 'bouquet4', this.onUp, this, 2, 1, 0);
		console.log("hello2");

		lu.onInputDown.add(over1, this);
		ru.onInputDown.add(over2, this);
		ld.onInputDown.add(over3, this);
		rd.onInputDown.add(over4, this);
	},
};
function over1(){
	var cover1 = this.add.sprite(Candy.GAME_WIDTH-401-150, Candy.GAME_HEIGHT-900,'bqcover');
	

	this.input.onDown.add(function(){
		cover1.visible = false;
		console.log("hello1 over1");
	}, this);
}

function over2(){
	var cover2 = this.add.sprite(Candy.GAME_WIDTH-401+150, Candy.GAME_HEIGHT-900,'bqcover');
	

	this.input.onDown.add(function(){
		cover2.visible = false;
		console.log("hello2 over2");
	}, this);
}

function over3(){
	var cover3 = this.add.sprite(Candy.GAME_WIDTH-401-150, Candy.GAME_HEIGHT-300,'bqcover');
	

	this.input.onDown.add(function(){
		cover3.visible = false;
		console.log("hello3 over3");
	}, this);
}

function over4(){
	var cover4 = this.add.sprite(Candy.GAME_WIDTH-401+150, Candy.GAME_HEIGHT-300,'bqcover');
	

	this.input.onDown.add(function(){
		cover4.visible = false;
		console.log("hello4 over4");
	}, this);
}


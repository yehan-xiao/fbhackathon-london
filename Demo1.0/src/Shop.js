Candy.Shop = function(game){};
Candy.Shop.prototype = {
	init: function(money){ 
		console.log(money);
	 },
	create: function(){
		// display shop store images
		this.add.sprite(0, 0, 'shopbackground');

		var group = this.add.group();

		// add bouquets
		var lu = this.add.button(Candy.GAME_WIDTH-401-150, Candy.GAME_HEIGHT-900, 'bouquet1', this.onUp, this, 2, 1, 0);
		var ru = this.add.button(Candy.GAME_WIDTH-401+150, Candy.GAME_HEIGHT-900, 'bouquet2', this.onUp, this, 2, 1, 0);
		var ld = this.add.button(Candy.GAME_WIDTH-401-150, Candy.GAME_HEIGHT-300, 'bouquet3', this.onUp, this, 2, 1, 0);
		var rd = this.add.button(Candy.GAME_WIDTH-401+150, Candy.GAME_HEIGHT-300, 'bouquet4', this.onUp, this, 2, 1, 0);

		lu.onInputDown.add(over1, this);
		ru.onInputDown.add(over2, this);
		ld.onInputDown.add(over3, this);
		rd.onInputDown.add(over4, this);

		this.add.button(Candy.GAME_WIDTH-401, Candy.GAME_HEIGHT-600, 'button-start', this.toCard, this);
	},
	toCard: function() {
		// jump to card 
		window.location.href = "src/input.html";
	}
};


function over1(){
	// once user selects left-up image then cover it
	var cover1 = this.add.sprite(Candy.GAME_WIDTH-401-150, Candy.GAME_HEIGHT-900,'bqcover');
	
	this.input.onDown.add(function(){
		cover1.visible = false;
	}, this);
}

function over2(){
	// once user selects right-up image then cover it
	var cover2 = this.add.sprite(Candy.GAME_WIDTH-401+150, Candy.GAME_HEIGHT-900,'bqcover');

	this.input.onDown.add(function(){
		cover2.visible = false;
	}, this);
}

function over3(){
	// once user selects left-down image then cover it
	var cover3 = this.add.sprite(Candy.GAME_WIDTH-401-150, Candy.GAME_HEIGHT-300,'bqcover');
	
	this.input.onDown.add(function(){
		cover3.visible = false;
	}, this);
}

function over4(){
	// once user selects right-down image then cover it
	var cover4 = this.add.sprite(Candy.GAME_WIDTH-401+150, Candy.GAME_HEIGHT-300,'bqcover');

	this.input.onDown.add(function(){
		cover4.visible = false;
	}, this);
}


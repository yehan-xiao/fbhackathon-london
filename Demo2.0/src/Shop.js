//external String toString();
var mymoney;
Candy.Shop = function(game){
};
Candy.Shop.prototype = {
	
	init: function(money){ 
		//var money1 = money + "haha?";
		//var money2 = paserInt(money1) + "<br>";
		//console.log(money1 + "haha?");

		//var score = money.toString();
		console.log(money);
		mymoney = money;
	 },
	create: function(){
		// display shop store images
		this.add.sprite(0, 0, 'shopbackground1');
		// diaplay flower price
		this.add.sprite(165, 310,'p30');
		this.add.sprite(430, 310,'p30');
		this.add.sprite(165, 570, 'p50');
		this.add.sprite(430, 570, 'p60');

		this.add.sprite(165, 830, 'p60');
		this.add.sprite(430, 830, 'p100');

		// score prompt
		// set font style
		console.log(mymoney);
		this._fontStyle = { font: "30px Arial", fill: "#FFA500", stroke: "#333", strokeThickness: 5, align: "center" };
		var pausedText = this.add.text(50, 20, "Your score = " + mymoney + "\n Please select flower", this._fontStyle);

		// Candy._scoreText = this.add.text(455, 20, this.money, this._fontStyle);
		//Candy._scoreText.setText((this.money1).toString());
		var group = this.add.group();

		// add bouquets
		var lu = this.add.button(Candy.GAME_WIDTH-401-150, Candy.GAME_HEIGHT-850, 'bouquet1', this.onUp, this, 2, 1, 0);
		var ru = this.add.button(Candy.GAME_WIDTH-401+120, Candy.GAME_HEIGHT-850, 'bouquet2', this.onUp, this, 2, 1, 0);
		var lm = this.add.button(Candy.GAME_WIDTH-401-150, Candy.GAME_HEIGHT-600, 'bouquet5', this.onUp, this, 2, 1, 0);
		var rm = this.add.button(Candy.GAME_WIDTH-401+120, Candy.GAME_HEIGHT-600, 'bouquet6', this.onUp, this, 2, 1, 0);
		var ld = this.add.button(Candy.GAME_WIDTH-401-150, Candy.GAME_HEIGHT-350, 'bouquet3', this.onUp, this, 2, 1, 0);
		var rd = this.add.button(Candy.GAME_WIDTH-401+120, Candy.GAME_HEIGHT-350, 'bouquet4', this.onUp, this, 2, 1, 0);

		lu.onInputDown.add(over1, this);
		ru.onInputDown.add(over2, this);
		ld.onInputDown.add(over3, this);
		rd.onInputDown.add(over4, this);
		lm.onInputDown.add(over5, this);
		rm.onInputDown.add(over6, this);

		this.add.button(Candy.GAME_WIDTH-301-150, Candy.GAME_HEIGHT-150, 'button-start', this.toCard, this);
	},
	toCard: function() {
		// jump to card 
		window.location.href = "src/input.html";
	}
};


function over1(){
	// once user selects left-up image then cover it
	var cover1 = this.add.sprite(Candy.GAME_WIDTH-401-150, Candy.GAME_HEIGHT-850,'cover1');
	
	this.input.onDown.add(function(){
		cover1.visible = false;
	}, this);
}

function over2(){
	// once user selects right-up image then cover it
	var cover2 = this.add.sprite(Candy.GAME_WIDTH-401+120, Candy.GAME_HEIGHT-850,'cover2');

	this.input.onDown.add(function(){
		cover2.visible = false;
	}, this);
}

function over3(){
	// once user selects left-down image then cover it
	var cover3 = this.add.sprite(Candy.GAME_WIDTH-401-150, Candy.GAME_HEIGHT-350,'cover3');
	
	this.input.onDown.add(function(){
		cover3.visible = false;
	}, this);
}

function over4(){
	// once user selects right-down image then cover it
	var cover4 = this.add.sprite(Candy.GAME_WIDTH-401+120, Candy.GAME_HEIGHT-350,'cover4');

	this.input.onDown.add(function(){
		cover4.visible = false;
	}, this);
}

function over5(){
	// once user selects right-down image then cover it
	var cover5 = this.add.sprite(Candy.GAME_WIDTH-401-150, Candy.GAME_HEIGHT-600,'cover5');

	this.input.onDown.add(function(){
		cover5.visible = false;
	}, this);
}

function over6(){
	// once user selects right-down image then cover it
	var cover6 = this.add.sprite(Candy.GAME_WIDTH-401+120, Candy.GAME_HEIGHT-600,'cover6');

	this.input.onDown.add(function(){
		cover6.visible = false;
	}, this);
}


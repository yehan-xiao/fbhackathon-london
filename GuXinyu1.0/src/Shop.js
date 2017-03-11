Candy.Shop = function(game){};
Candy.Shop.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'shopbackground');
		//this.add.button(Candy.GAME_WIDTH-401-10, Candy.GAME_HEIGHT-143-10, 'flower1', this.openCard, this);
		// add the button that will show the card
		//this.add.button(Candy.GAME_WIDTH-401-10, Candy.GAME_HEIGHT-143-10, 'button-next', this.openCard, this);
		
		//console.log("Load bunch of flowers");
		//flower1 = this.game.add.sprite(Candy.GAME_WIDTH-401-10, Candy.GAME_HEIGHT-143-10, 'flower1', this.openCard, this);
	},
	openCard: function(){

	}
};
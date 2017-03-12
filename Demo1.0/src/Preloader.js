Candy.Preloader = function(game){
	// define width and height of the game
	Candy.GAME_WIDTH = 640;
	Candy.GAME_HEIGHT = 960;
};
Candy.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#B4D9E7';
		this.preloadBar = this.add.sprite((Candy.GAME_WIDTH-311)/2, (Candy.GAME_HEIGHT-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		// load images
		this.load.image('background', 'img/background1.jpg');
		this.load.image('floor', 'img/floor.png');
		this.load.image('monster-cover', 'img/monster-cover.png');
		this.load.image('title', 'img/title.png');
		this.load.image('score-bg', 'img/score-bg.png');
		this.load.image('button-pause', 'img/button-pause.png');

		// falling flowers
        this.load.image('rose', 'img/rose.png');
        this.load.image('lily', 'img/lily.png');
        this.load.image('sunflower', 'img/sunflower.png');
        this.load.image('carnation', 'img/carnation.png');

        // flower shop
        this.load.image('bouquet1', 'img/bouquet1.jpg');
        this.load.image('bouquet2', 'img/bouquet2.jpg');
        this.load.image('bouquet3', 'img/bouquet3.jpg');
        this.load.image('bouquet4', 'img/bouquet4.jpeg');
        this.load.image('bqcover', 'img/cover1.jpg');
    	this.load.image('shopbackground', 'img/shopBG.png');

		// load spritesheets
		// this.load.spritesheet('candy', 'img/candy.png', 82, 98);
		this.load.spritesheet('waffle-idle', 'img/waffle-idle.png', 153, 131);
		this.load.spritesheet('button-start', 'img/button-start.png', 401, 143);
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};
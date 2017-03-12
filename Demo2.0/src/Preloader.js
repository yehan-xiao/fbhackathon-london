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
        this.load.image('bouquet1', 'img/flower_shop01.png');
        this.load.image('bouquet2', 'img/flower_shop02.png');
        this.load.image('bouquet3', 'img/flower_shop03.png');
        this.load.image('bouquet4', 'img/flower_shop04.png');
        this.load.image('bouquet5', 'img/flower_shop05.png');
        this.load.image('bouquet6', 'img/flower_shop06.png');
        // price icon
        this.load.image('p30', 'img/price_30.png');
        this.load.image('p50', 'img/price_50.png');
        this.load.image('p60', 'img/price_60.png');
        this.load.image('p100', 'img/price_100.png');
        

        this.load.image('bqcover', 'img/cover1.jpg');
        // flower cover
        this.load.image('cover1', 'img/flower01.png');
        this.load.image('cover2', 'img/flower02.png');
        this.load.image('cover3', 'img/flower03.png');
        this.load.image('cover4', 'img/flower04.png');
        this.load.image('cover5', 'img/flower05.png');
        this.load.image('cover6', 'img/flower06.png');

    	this.load.image('shopbackground', 'img/shopBG.png');
    	this.load.image('shopbackground1', 'img/flower_shop_bg.png');

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
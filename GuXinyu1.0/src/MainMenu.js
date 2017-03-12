Candy.MainMenu = function(game){};
Candy.MainMenu.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'background');
		// this.add.sprite(-130, Candy.GAME_HEIGHT-514, 'monster-cover');
		this.add.sprite((Candy.GAME_WIDTH-395)/2, 30, 'title');
		// add the button that will start the game
		this.add.button((Candy.GAME_WIDTH-395)/2, Candy.GAME_HEIGHT-143-10, 'button-start', this.startGame, this, 1, 0, 2);
	},
	startGame: function() {
		// start the Game state
		function(d, s, id);
		this.state.start('Game');
	}
function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=230721050727949";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk');
};
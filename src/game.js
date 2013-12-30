// Minion image
var minionReady = false;
var minionImage = new Image();
minionImage.onload = function() {
	minionReady = true;
};
minionImage.src = "assets/minion.png";

// Render objects
var render = function() {
	if(minionReady) {
		context.drawImage(minionImage, minion.x, minion.y);
	}
}
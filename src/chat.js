var responses = [
	"bananas!",
	"bapples!",
	"waaaaaht?",
	"okay, okay!",
	"bleblebleble",
	"hahahhahahahahaha",
	"ehehehehe",
	"fight! fight! fight!",
	"para tu!",
	"potato?",
	"potato!",
	"a da da da",
	"me! me! me!",
	"idiot",
	"bakoy? bakoy!",
	"ooooooooooo",
	"mwamwamwa",
	"boookam?",
	"bananananananas",
	"ba ba ba ba na na"
];

function minionResponse() {
	var randomInt = Math.floor(Math.random() * responses.length);
	alert(responses[randomInt]);
}

$(document).keypress(function(e) {
	if(e.which == 13) {
		minionResponse();
	}
});

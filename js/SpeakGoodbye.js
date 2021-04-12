(function (window) {

var byeSpeaker = {}
byeSpeaker.name = "Good Bye";
byeSpeaker.speak = function () {

}

function speak(name) {
  console.log(byeSpeaker + " " + name);
	}
	window.byeSpeaker = byeSpeaker;

})(window);
(function (window) {

var byeSpeaker = {}
byeSpeaker.names = "Good Bye";
byeSpeaker.speak = function () {

}

function speak(names) {
  console.log(byeSpeaker + " " + names);
	}
	window.byeSpeaker = byeSpeaker;

})(window);

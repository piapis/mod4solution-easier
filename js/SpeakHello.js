(function (window) {

var helloSpeaker = {};
helloSpeaker.names = "Hello";
helloSpeaker.speak = function () {

}

function speak(names) {
  console.log(helloSpeaker + " " + names);
	}

	window.helloSpeaker = helloSpeaker;

})(window);

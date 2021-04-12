(function (window) {

var helloSpeaker = {};
helloSpeaker.name = "Hello";
helloSpeaker.speak = function () {

}

function speak(name) {
  console.log(helloSpeaker + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
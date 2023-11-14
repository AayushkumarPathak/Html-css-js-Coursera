// (function(window) {
//     var speakWord = "Hello";
//     var helloSpeaker = {};
  
//     helloSpeaker.speak = function(name) {
//       console.log(speakWord + " " + name);
//     }
  
//     window.helloSpeaker = helloSpeaker;
  
//   })(window);

(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
  

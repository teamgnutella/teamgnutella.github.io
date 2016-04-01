function genSearch(wordList) {
	var wordsCopy = [];
	for (var i = 0; i < wordList.length; i++) {
		wordsCopy[i] = wordList[i];
	}
	var maxLength = 0;
	for (var i = 0; i < wordList.length; i++) {
		if (wordList[i].length > maxLength) {
			maxLength = wordList[i].length;
		}
	}
	var list = [];
	for (var i = 0; i < maxLength; i++) {
		list[i] = [];
		for (var j = 0; j < maxLength; j++) {
			list[i][j] = alpha();
		}
	}
	while (wordList.length > 0) {
		for (var i = 0; i < maxLength; i++) {
			for (var j = 0; j < maxLength; j++) {
				if (wordList.length > 0) {
					if (Math.random() < 0.4 && list[i].length - j >= wordList[0].length) {
						var word = wordList.shift();
						for (var r = 0; j < maxLength && r < word.length; j++) {
							list[i][j] = word.charAt(r);
							r++;
						}
					}
				}
			}
		}
	}
	for (var i = 0; i < list.length; i++) {
		for (var j = 0; j < list[i].length; j++) {
			document.write(list[i][j]);
		}
		document.write("<br>");
	}
}
var alpha = function() {
	var letters = "abcdefghijklmnopqrstuvwxyz";
	var choice = Math.random();
	for (var i = 0; i < 26; i++) {
		if (choice < (i + 1)/26) {
			return letters.charAt(i);
		}
	}
}
//var filRea;
//if (window.XMLHttpRequest) {
//	filRea = new XMLHttpRequest();
//} else {
//	filRea = new ActiveXObject("Microsoft.XMLHTTP");
//}
//filRea.open("GET", "http://localhost/words.txt", true);
//filRea.send();
genSearch(["Red", "Blue", "Green"]);
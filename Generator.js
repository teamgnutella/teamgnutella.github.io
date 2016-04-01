function Cell(str, bool) {
	this.str = str;
	this.isPartOfWord = bool;
}
function genSearch(wordList) {
	//Find length of longest word in wordList
	//var maxLength = 0;
	//for (var i = 0; i < wordList.length; i++) {
	//	if (wordList[i].length > maxLength) {
	//		maxLength = wordList[i].length;
	//	}
	//}
	//Load "list" with random characters
	var list = [];
	for (var i = 0; i < 10; i++) {
		list[i] = [];
		for (var j = 0; j < 10; j++) {
			list[i][j] = new Cell(alpha(), false);
		}
	}
	
	//Place words from wordList into list
	while (wordList.length > 0) {
		
		for (var i = 0; i < list.length; i++) {
			
			for (var j = 0; j < list[i].length; j++) {
				
				if (wordList.length > 0 && Math.random() < 0.3) {
					
					var placement = Math.random();
					if (placement < 0.333) {
						
						//Place word horizontally if there's room
						if (isRoom(list, i, j, wordList[0], "h")) {
							var r = 0;
							var word = wordList.shift();
							for (j; j < list[i].length && r < word.length; j++) {
								list[i][j] = new Cell(word.charAt(r), true);
								r++;
							}
						}
						
					} else if (placement < 0.667) {
						//Place word vertically if there's room
						if (isRoom(list, i, j, wordList[0], "v")) {
							var word = wordList.shift();
							var posInWord = 0;
							var r = 0;
							for (var k = i; k < list.length && r < word.length; k++) {
								list[k][j] = new Cell(word.charAt(r), true);
								r++;
							}
						}
					} else {
						//Place word diagonally
						var direction = Math.random();
						if (direction < 0.25) {
							//Up and to the right
							if (isRoom(list, i, j, wordList[0], "ur")) {
								
							}
						} else if (direction < 0.5) {
							//Up and to the left
						} else if (direction < 0.75) {
							//Down and to the left
						} else {
							//Down and to the right
						}
					}
				}
			}
		}
	}
	console.log(list);
	return list;
	/*for (var i = 0; i < list.length; i++) {
		for (var j = 0; j < list.length; j++) {
			document.write(list[i][j].str);
		}
		document.write("<br>");
	}*/
}
function alpha() {
	var letters = "abcdefghijklmnopqrstuvwxyz";
	var choice = Math.random();
	for (var i = 0; i < 26; i++) {
		if (choice < (i + 1)/26) {
			return letters.charAt(i);
		}
	}
}
function isRoom(list, ind1, ind2, wordToPlace, str) {
	switch (str) {
	case "h":
		
		if (wordToPlace.length > list[ind1].length - ind2) {
			return false;
		}
		for (var j = ind2; j < list[ind1].length; j++) {
			if (list[ind1][j].isPartOfWord) {
				return false;
			}
		}
		return true;
		
	case "v":
		
		if (wordToPlace.length > list.length - ind1) {
			return false;
		} else {
			for (var i = ind1; i < list.length; i++) {
				if (list[i][ind2].isPartOfWord) {
					return false;
				}
			}
		}
		return true;
		
	case "ur":
		
		if (wordToPlace.length > list[0].length - ind2 && wordToPlace.length > ind1 + 1) {
			return false;
		} else {
			
			for (var i = ind1; i >= 0; i--) {
			}
		}
	case "ul":
	
	case "dl":
	
	case "dr":
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
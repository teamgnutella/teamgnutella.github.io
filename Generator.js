//var sideLength = document.getElementById("width").value;
var sideLength = 10;
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
	for (var i = 0; i < sideLength; i++) {
		list[i] = [];
		for (var j = 0; j < sideLength; j++) {
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
							var word = wordList.shift();
							for (var r = 0, j; j < list[i].length && r < word.length; j++, r++) {
								list[i][j] = new Cell(word.charAt(r), true);
							}
						}
						
					} else if (placement < 0.667) {
						//Place word vertically if there's room
						if (isRoom(list, i, j, wordList[0], "v")) {
							var word = wordList.shift();
							for (var k = i, posInWord = 0; k < list.length && posInWord < word.length; k++, posInWord++) {
								list[k][j] = new Cell(word.charAt(posInWord), true);
							}
						}
					} else {
						//Place word diagonally
						var direction = Math.random();
						if (direction < 0.25) {
							//Up and to the right
							
							if (isRoom(list, i, j, wordList[0], "ur")) {
								var word = wordList.shift();
								for (var posInWord = 0, row = i, column = j;
								row >= 0 && column < wordList[row].length && posInWord < word.length;
								row--, column++) {
									list[r][i] = new Cell(word.charAt(posInWord), true);
								}
							}
						} else if (direction < 0.5) {
							//Up and to the left
						} else if (direction < 0.75) {
							//Down and to the left
						} else {
							//Down and to the right
							if (isRoom(list, i, j, wordList[0], "dr")) {
								var word = wordList.shift();
								for (var posInWord = 0, row = i, column = j;
								posInWord < word.length, row < list.length, column < list[i].length;
								posInWord++, row++, column++) {
									list[row][column] = new Cell(word.charAt(posInWord), true);
								}
							}
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
		} else {
			for (var j = ind2; j < list[ind1].length; j++) {
				if (list[ind1][j].isPartOfWord) {
					return false;
				}
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
		
		if (wordToPlace.length > ind1 + 1 || wordToPlace.length > list[ind1].length - ind2) {
			return false;
		} else {
			for (var i = ind1, j = ind2; i >= 0 && j < list[i].length; i--, j++) {
				if (list[i][j].isPartOfWord) {
					return false;
				}
			}
		}
		return true;
		
	case "ul":
	
		if (wordToPlace.length > ind1 + 1 || wordToPlace.length > ind2 + 1) {
			return false;
		} else {
			for (var i = ind1, j = ind2; i >= 0, j >= 0; i--, j--) {
				if (list[i][j].isPartOfWord) {
					return false;
				}
			}
		}
		return true;
		
	case "dl":
	
		if (wordToPlace.length > list.length - ind1 || wordToPlace.length > ind2 + 1) {
			
		}
			
	case "dr":
		if (wordToPlace.length > list.length - ind1 || wordToPlace.length > list[ind1].length - ind2) {
			return false;
		} else {
			for (var i = ind1, j = ind2; i < list.length && j < list[i].length; i++, j++) {
				if (list[i][j].isPartOfWord) {
					return false;
				}
			}
		}
		return true;
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
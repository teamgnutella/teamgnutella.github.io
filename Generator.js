function Cell(str, bool) {
	this.str = str;
	this.isPartOfWord = bool;
}
var wordsInSearch;
function genSearch(wordList, wantWords) {
	var sideLength = document.getElementById("width").value;
	var list = [];
	for (var i = 0; i < sideLength; i++) {
		list[i] = [];
		for (var j = 0; j < sideLength; j++) {
			list[i][j] = new Cell(alpha(), false);
		}
	}
	var wordListCopy = [];
	for (var i = 0; i < wordList.length; i++) {
		wordListCopy[i] = wordList[i];
	}
	//Place words from wordList into list
	var wordsinSearch = [];
	var numConfigTries = 0;
	while (wordList.length > 0 && numConfigTries < 4) {
		numConfigTries++;
		var loopsWithoutChange = 0;
		while (wordList.length > 0 && loopsWithoutChange < 5) {
			if (wordList[0].length > sideLength) {
				wordList.shift();
			}
			loopsWithoutChange++;
			for (var i = 0; i < list.length; i++) {
				
				for (var j = 0; j < list[i].length; j++) {
					wordsInSearch = [];
					if (wordList.length > 0 && wordList[0].indexOf(list[i][j].str) > -1 && list[i][j].isPartOfWord) {
						overLapIndex = 0;
						for (var q = 0; q < wordList[0].length; q++) {
							if (wordList[0].toLowerCase().charAt(q) == list[i][j].str.toLowerCase()) {
								overLapIndex = q;
								break;
							}
						}
						var placement = Math.random();
						if (placement < 0.167) {
							
							//Place word horizontally if there's room
							if (j - overLapIndex >= 0) {
								if (isRoom(list, i, j - overLapIndex, wordList[0], "h")) {
									var word = wordList.shift();
									wordsInSearch[wordsInSearch.length] = word;
									for (var posInWord = 0, j = j - overLapIndex; j < list[i].length && posInWord < word.length; j++, posInWord++) {
										list[i][j] = new Cell(word.charAt(posInWord), true);
									}
									loopsWithoutChange--;
								}
							}
							
						} else if (placement < 0.333) {
							//Place word vertically if there's room
							if (i - overLapIndex >= 0) {
								if (isRoom(list, i - overLapIndex, j, wordList[0], "v")) {
									var word = wordList.shift();
									wordsInSearch[wordsInSearch.length] = word;
									
									for (var k = i - overLapIndex, posInWord = 0; k < list.length && posInWord < word.length; k++, posInWord++) {
										list[k][j] = new Cell(word.charAt(posInWord), true);
									}
									loopsWithoutChange--;
								}
							}
						} else if (placement < 0.5) {
							//Place word diagonally
							//Up and to the right
							if (i + overLapIndex < list.length && j - overLapIndex >= 0) {
								if (isRoom(list, i + overLapIndex, j - overLapIndex, wordList[0], "ur")) {
									var word = wordList.shift();
									wordsInSearch[wordsInSearch.length] = word;
									for (var posInWord = 0, row = i + overLapIndex, column = j - overLapIndex;
									row >= 0 && column < list[row].length && posInWord < word.length;
									posInWord++, row--, column++) {
										list[row][column] = new Cell(word.charAt(posInWord), true);
									}
									loopsWithoutChange--;
								}
							}
						} else if (placement < 0.667) {
							//Up and to the left
							if (i + overLapIndex < list.length && j + overLapIndex < list[0],length) {
								if (isRoom(list, i + overLapIndex, j + overLapIndex, wordList[0], "ul")) {
									var word = wordList.shift();
									wordsInSearch[wordsInSearch.length] = word;
									for (var posInWord = 0, row = i + overLapIndex, column = j + overLapIndex; posInWord < word.length; posInWord++, row--, column--) {
										list[row][column] = new Cell(word.charAt(posInWord), true);
									}
									loopsWithoutChange--;
								}
							}
						} else if (placement < 0.833) {
							//Down and to the left
							if (i - overLapIndex >= 0 && j + overLapIndex < list[0].length) {
								if (isRoom(list, i - overLapIndex, j + overLapIndex, wordList[0], "dl")) {
									var word = wordList.shift();
									wordsInSearch[wordsInSearch.length] = word;
									for (var posInWord = 0, row = i - overLapIndex, column = j + overLapIndex; posInWord < word.length; posInWord++, row++, column--) {
										list[row][column] = new Cell(word.charAt(posInWord), true);
									}
									loopsWithoutChange--;
								}
							}
						} else {
							//Down and to the right
							if (i - overLapIndex >= 0 && j - overLapIndex >= 0) {
								if (isRoom(list, i - overLapIndex, j - overLapIndex, wordList[0], "dr")) {
									var word = wordList.shift();
									wordsInSearch[wordsInSearch.length] = word;
									for (var posInWord = 0, row = i - overLapIndex, column = j - overLapIndex;
									posInWord < word.length && row < list.length && column < list[i].length;
									posInWord++, row++, column++) {
										list[row][column] = new Cell(word.charAt(posInWord), true);
									}
									loopsWithoutChange--;
								}
							}
						}
					}
					if (wordList.length > 0 && Math.random() > 0.667) {
						
						var placement = Math.random();
						if (placement < 0.167) {
							
							//Place word horizontally if there's room
							if (isRoom(list, i, j, wordList[0], "h")) {
								var word = wordList.shift();
								wordsInSearch[wordsInSearch.length] = word;
								for (var posInWord = 0; j < list[i].length && posInWord < word.length; j++, posInWord++) {
									list[i][j] = new Cell(word.charAt(posInWord), true);
								}
								loopsWithoutChange--;
							}
							
						} else if (placement < 0.333) {
							//Place word vertically if there's room
							if (isRoom(list, i, j, wordList[0], "v")) {
								var word = wordList.shift();
								wordsInSearch[wordsInSearch.length] = word;
								for (var k = i, posInWord = 0; k < list.length && posInWord < word.length; k++, posInWord++) {
									list[k][j] = new Cell(word.charAt(posInWord), true);
								}
								loopsWithoutChange--;
							}
						} else if (placement < 0.5) {
							//Place word diagonally
							//Up and to the right
								
							if (isRoom(list, i, j, wordList[0], "ur")) {
								var word = wordList.shift();
								wordsInSearch[wordsInSearch.length] = word;
								for (var posInWord = 0, row = i, column = j;
								row >= 0 && column < list[row].length && posInWord < word.length;
								posInWord++, row--, column++) {
									list[row][column] = new Cell(word.charAt(posInWord), true);
								}
								loopsWithoutChange--;
							}
						} else if (placement < 0.667) {
							//Up and to the left
							if (isRoom(list, i, j, wordList[0], "ul")) {
								var word = wordList.shift();
								wordsInSearch[wordsInSearch.length] = word;
								for (var posInWord = 0, row = i, column = j; posInWord < word.length; posInWord++, row--, column--) {
									list[row][column] = new Cell(word.charAt(posInWord), true);
								}
								loopsWithoutChange--;
							}
						} else if (placement < 0.833) {
							//Down and to the left
							if (isRoom(list, i, j, wordList[0], "dl")) {
								var word = wordList.shift();
								wordsInSearch[wordsInSearch.length] = word;
								for (var posInWord = 0, row = i, column = j; posInWord < word.length; posInWord++, row++, column--) {
									list[row][column] = new Cell(word.charAt(posInWord), true);
								}
								loopsWithoutChange--;
							}
						} else {
							//Down and to the right
							if (isRoom(list, i, j, wordList[0], "dr")) {
								var word = wordList.shift();
								wordsInSearch[wordsInSearch.length] = word;
								for (var posInWord = 0, row = i, column = j;
								posInWord < word.length && row < list.length && column < list[i].length;
								posInWord++, row++, column++) {
									list[row][column] = new Cell(word.charAt(posInWord), true);
								}
								loopsWithoutChange--;
							}
						}
					}
				}
			}
		}
	}
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
function isRoom(list, ind1, ind2, wordToPlace, dir) {
	var allOverLap = true;
	if (dir == "h") {
		
		if (wordToPlace.length > list[0].length - ind2) {
			return false;
		} else {
			for (var posInWord = 0; posInWord < wordToPlace.length; ind2++, posInWord++) {
				//console.log(list[ind1][ind2].str + " == " + wordToPlace.charAt(posInWord) + " evaluates to " + (list[ind1][ind2].str == wordToPlace.charAt(posInWord)));
				if (list[ind1][ind2].isPartOfWord && list[ind1][ind2].str.toLowerCase() != wordToPlace.toLowerCase().charAt(posInWord)) {
					return false;
				}
				if (!list[ind1][ind2].isPartOfWord || list[ind1][ind2].str.toLowerCase() != wordToPlace.toLowerCase().charAt(posInWord)) {
					allOverLap = false;
				}
			}
		}
		if (allOverLap) {
			return false;
		}
		return true;
		
	} else if (dir == "v") {
		if (wordToPlace.length > list.length - ind1) {
			return false;
		} else {
			for (var posInWord = 0; posInWord < wordToPlace.length; posInWord++, ind1++) {
				//console.log(list[ind1][ind2].str + " == " + wordToPlace.charAt(posInWord) + " evaluates to " + (list[ind1][ind2].str == wordToPlace.charAt(posInWord)));
				if (list[ind1][ind2].isPartOfWord && list[ind1][ind2].str.toLowerCase() != wordToPlace.toLowerCase().charAt(posInWord)) {
					return false;
				}
				if (!list[ind1][ind2].isPartOfWord || list[ind1][ind2].str.toLowerCase() != wordToPlace.toLowerCase().charAt(posInWord)) {
					allOverLap = false;
				}
			}
		}
		if (allOverLap) {
			return false;
		}
		return true;
	} else if (dir == "ur") {
		if (wordToPlace.length > ind1 + 1 || wordToPlace.length > list[0].length - ind2) {
			return false;
		} else {
			for (var posInWord = 0, ind1, ind2;
			posInWord < wordToPlace.length;
			ind1--, ind2++, posInWord++) {
				//console.log(list[ind1][ind2].str + " == " + wordToPlace.charAt(posInWord) + " evaluates to " + (list[ind1][ind2].str == wordToPlace.charAt(posInWord)));
				if (list[ind1][ind2].isPartOfWord && list[ind1][ind2].str.toLowerCase() != wordToPlace.toLowerCase().charAt(posInWord)) {
					return false;
				}
				if (!list[ind1][ind2].isPartOfWord || list[ind1][ind2].str.toLowerCase() != wordToPlace.toLowerCase().charAt(posInWord)) {
					allOverLap = false;
				}
			}
		}
		if (allOverLap) {
			return false;
		}
		return true;
	} else if (dir == "ul") {
		if (wordToPlace.length > ind1 + 1 || wordToPlace.length > ind2 + 1) {
			return false;
		} else {
			for (var posInWord = 0; posInWord < wordToPlace.length; posInWord++, ind1--, ind2--) {
				//console.log(list[ind1][ind2].str + " == " + wordToPlace.charAt(posInWord) + " evaluates to " + (list[ind1][ind2].str == wordToPlace.charAt(posInWord)));
				if (list[ind1][ind2].isPartOfWord && list[ind1][ind2].str.toLowerCase() != wordToPlace.toLowerCase().charAt(posInWord)) {
					return false;
				}
				if (!list[ind1][ind2].isPartOfWord || list[ind1][ind2].str.toLowerCase() != wordToPlace.toLowerCase().charAt(posInWord)) {
					allOverLap = false;
				}
			}
		}
		if (allOverLap) {
			return false;
		}
		return true;
	} else if (dir == "dl") {
		if (wordToPlace.length > list.length - ind1 || wordToPlace.length > ind2 + 1) {
			return false;
		} else {
			for (var posInWord = 0; posInWord < wordToPlace.length; posInWord++, ind1++, ind2--) {
				//console.log(list[ind1][ind2].str + " == " + wordToPlace.charAt(posInWord) + " evaluates to " + (list[ind1][ind2].str == wordToPlace.charAt(posInWord)));
				if (list[ind1][ind2].isPartOfWord && list[ind1][ind2].str.toLowerCase() != wordToPlace.toLowerCase().charAt(posInWord)) {
					return false;
				}
				if (!list[ind1][ind2].isPartOfWord || list[ind1][ind2].str.toLowerCase() != wordToPlace.toLowerCase().charAt(posInWord)) {
					allOverLap = false;
				}
			}
		}
		if (allOverLap) {
			return false;
		}
		return true;
	} else if (dir == "dr") {
		if (wordToPlace.length > list.length - ind1 || wordToPlace.length > list[0].length - ind2) {
			return false;
		} else {
			for (var posInWord = 0;
			posInWord < wordToPlace.length;
			posInWord++, ind1++, ind2++) {
				//console.log(list[ind1][ind2].str + " == " + wordToPlace.charAt(posInWord) + " evaluates to " + (list[ind1][ind2].str == wordToPlace.charAt(posInWord)));
				if (list[ind1][ind2].isPartOfWord && list[ind1][ind2].str.toLowerCase() != wordToPlace.toLowerCase().charAt(posInWord)) {
					return false;
				}
				if (!list[ind1][ind2].isPartOfWord || list[ind1][ind2].str.toLowerCase() != wordToPlace.toLowerCase().charAt(posInWord)) {
					allOverLap = false;
				}
			}
		}
		if (allOverLap) {
			return false;
		}
		return true;
	}
}
function getWordsInSearch() {
	return wordsInSearch;
}
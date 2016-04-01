$(document).ready(function(){
	var wordArray = [];
	var setLength = 10;
	$('#add').click(function(){
		var word = $('#word').val();
		if(!toBig(word)){
			wordArray.push(word);
			$('#word-box').append(
				'<li class="word">' + word + '</li>'
			);
			console.log(wordArray);
			console.log("Good Size");
		}
		
	});
	function toBig(word){
		var big = true;
		if(word.length < setLength){
			big = false;
		}
		return big;
	}
});
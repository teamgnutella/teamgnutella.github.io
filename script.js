$(document).ready(function(){
	var wordArray = [];
	var setLength = 10;
	$('#add').click(function(){
		var word = $('#word').val();
		$('#word-box').append(
		'<li class="word">' + word + '</li>'
		);
		if(toBig(word)){
			wordArray.push(word);
			console.log(wordArray);
			console.log("Print");
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
$(document).ready(function(){
	var wordArray = [];
	$('#add').click(function(){
		var word = $('#word').val();
		$('#word-box').append(
		'<li class="word">' + word + '</li>'
		);
		wordArray.push(word);
		console.log(wordArray);
	});
});
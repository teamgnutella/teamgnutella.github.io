$(document).ready(function(){
	$('#add').click(function(){
		var word = $('#word').val();
		$('#word-box').append(
		'<li class="word">' + word + '</li>'
		);
	});
	
});
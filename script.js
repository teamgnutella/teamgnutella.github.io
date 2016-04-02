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
					
					// Now clear the field
					document.getElementById('word').value = "";
					
				}
	});
	function toBig(word){
		var big = true;
		if(word.length < setLength){
			big = false;
		}
		return big;
	}
	
	var menu = $(".Menu div").height();
	var name = "";
	var temp = menu;
	$(".Menu div").hover(
		function(){
			for(var i = 1; i < $(this).children().size(); i++){
				name = "#" + $(this).attr("id") + " ." + i;
				$(name).animate({
					"top": menu
				},{
					queue: false,
					duration: 250
				});
				
				menu += temp;
			}
			menu = temp;
		},
		function(){
			for(var i = $(this).children().size() - 1; i > 0; i--){
				name = "#" + $(this).attr("id") + " ." + i;
				$(name).animate({
					"top": 0
				},{
					queue: false,
					duration: 250
				});
				name = "";
			}
			menu = temp;
		}
	);
	textField = document.getElementById('word')
	textField.addEventListener('keyup', addWordToList)
	
	function addWordToList(event) {
			if(event.keyCode == 13){
				var word = $('#word').val();
				if(!toBig(word)){
					wordArray.push(word);
					$('#word-box').append(
						'<li class="word">' + word + '</li>'
					);
					
					// Now clear the field
					document.getElementById('word').value = "";
					
				}
			}
		}
});
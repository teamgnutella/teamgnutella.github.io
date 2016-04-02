$(document).ready(function(){
	function addWordToList(word) {
		if(word.match(/^[a-zA-Z]+$/)) {
			if(!toBig(word) && word != "") {
				$('#word-box').append(
					'<div>' + word + '</div>'
				);				
				// Now clear the field
				document.getElementById('word').value = "";
			}
		}
	}
	
	var wordArray = [];
	$('#add').click(function(){
		var word = $('#word').val();
		addWordToList(word);
	});
	function toBig(word){
		var setLength = document.getElementById('width').value;
		var big = true;
		if(word.length <= setLength){
			big = false;
		}
		return big;
	}
	
	var menu = $(".Menu div").height();
	var name = "";
	
	var id = "";
	var clickedFunc = false;
	var top = "";
	
	$("#Style #option").css("top", menu);
	$("#Fonts #option").css("top", menu*2);
	$("#Translate #option").css("top", menu*3);

	$(".menuOption").hover(
		function(){
			id = $(this).attr("id");
			name = "#" + id + " #option"
			$(this).animate({
				'width' : 500
			},{
				queue: false,
				duration: 250
			});
			$(name).animate({
				'margin-left' : 250
			},{
				queue: false,
				duration: 250
			});
			setTimeout(function(){
				$(name).css("z-index", 0);
			}, 250);
			
			clickedFunc = true;
		},
		function(){
			id = $(this).attr("id");
			name = "#" + id + " #option"
			$(name).css("z-index", -1);
			$(name).animate({
				'margin-left' : 0
			},{
				queue: false,
				duration: 250
			});
			$(this).animate({
				'width' : 250
			},{
				queue: false,
				duration: 250
			});
			clickedFunc = false;
		}
	);
	var clicked = false;
	$("#slideMenu").click(function(){
		if(!clicked){
			$(".Menu").animate({
				"left": 0
			},{
				queue: false,
				duration: 250
			});
			$(this).animate({
				"left": 265
			},{
				queue: false,
				duration: 250
			});
			clicked = true;
		}
		else{
			for(var i = 1; i < $(".Menu").children().size(); i++){	
				var cool = ".opt" + i;
				$(cool).animate({
					"margin-left": 0
				},{
					queue: false,
					duration: 250
				});
			}
			$(".Menu").animate({
				"left": -250
			},{
				queue: false,
				duration: 250
			});
			$(this).animate({
				"left": 15
			},{
				queue: false,
				duration: 250
			});
			clicked = false;
		}
		
	});
	textField = document.getElementById('word')
	textField.addEventListener('keyup', addWordEnter)
	
	$("#word-box").on("click", 'div', function() {
		$(this).remove();
	});
	
	
	function addWordEnter(event) {
		if(event.keyCode == 13){
			var word = $('#word').val();
			addWordToList(word)
		}
	}
});
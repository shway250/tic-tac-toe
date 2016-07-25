/*
Jackson
*/

var blankDiv = document.getElementsByClassName('playSquare');

blankDiv.addEventListener("click", function(){
	for(int i = 0; i < blankDiv.length; i++){
		blankDiv[i].style.backgroundColor = "blue";
	}
});
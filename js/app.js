/*
Jackson
*/
var playerOnePlaying = true;
var xSquare = '<img alt="XZibit" src="http://img2-ak.lst.fm/i/u/arO/2a6031c9d53d48fda501d84bac7089ff">';
var oSquare = '<img alt="Oprah" src="http://cdn.newsapi.com.au/image/v1/dae932484026f25cb9a64e3af011cfa4">';
var whoWon = false;

var blankDiv = document.getElementsByClassName('playSquare');//blank play square
var messenger = document.getElementById('whosTurn');


document.querySelector("input[name=reset]").addEventListener('click', reset);
 
var winner = function(checker){
	if(playerOnePlaying == true){
		///////Row combos
		if(blankDiv[0].squareType == "X" &&  blankDiv[1].squareType == "X" && blankDiv[2].squareType == "X"){
			console.log("X Wins");
			messenger.style.fontSize = "90px";
			whoWon == true;
		}
		else if(blankDiv[3].squareType == "X" &&  blankDiv[4].squareType == "X" && blankDiv[5].squareType == "X"){
			console.log("X Wins");
			messenger.style.fontSize = "90px";
			return true;
		}
		else if(blankDiv[6].squareType == "X" &&  blankDiv[7].squareType == "X" && blankDiv[8].squareType == "X"){
			console.log("X Wins");
			messenger.style.fontSize = "90px";
			return true;
		}
		/////////Column Combos
		else if(blankDiv[0].squareType == "X" &&  blankDiv[3].squareType == "X" && blankDiv[6].squareType == "X"){
			console.log("X Wins");
			messenger.style.fontSize = "90px";
			return true;
		}
		else if(blankDiv[1].squareType == "X" &&  blankDiv[4].squareType == "X" && blankDiv[7].squareType == "X"){
			console.log("X Wins");
			messenger.style.fontSize = "90px";
			return true;
		}
		else if(blankDiv[2].squareType == "X" &&  blankDiv[5].squareType == "X" && blankDiv[8].squareType == "X"){
			console.log("X Wins");
			messenger.style.fontSize = "90px";
			return true;
		}
		///////////Diagonal///////
		else if(blankDiv[0].squareType == "X" &&  blankDiv[4].squareType == "X" && blankDiv[8].squareType == "X"){
			console.log("X Wins");
			messenger.style.fontSize = "90px";
			return true;
		}
		else if(blankDiv[2].squareType == "X" &&  blankDiv[4].squareType == "X" && blankDiv[6].squareType == "X"){
			console.log("X Wins");
			messenger.innerHTML = "X WINS YUH DIG?!"
			messenger.style.fontSize = "90px";
			return true;
		}
		else{
			return false;
		}
	}
	else if(playerOnePlaying == false){
		///////Row combos
		if(blankDiv[0].squareType == "O" &&  blankDiv[1].squareType == "O" && blankDiv[2].squareType == "O"){
			console.log("O Wins");
		}
		else if(blankDiv[3].squareType == "O" &&  blankDiv[4].squareType == "O" && blankDiv[5].squareType == "O"){
			console.log("O Wins");
		}
		else if(blankDiv[6].squareType == "O" &&  blankDiv[7].squareType == "O" && blankDiv[8].squareType == "O"){
			console.log("O Wins");
		}
		/////////Column Combos
		else if(blankDiv[0].squareType == "O" &&  blankDiv[3].squareType == "O" && blankDiv[6].squareType == "O"){
			console.log("O Wins");
		}
		else if(blankDiv[1].squareType == "O" &&  blankDiv[4].squareType == "O" && blankDiv[7].squareType == "O"){
			console.log("O Wins");
		}
		else if(blankDiv[2].squareType == "O" &&  blankDiv[5].squareType == "O" && blankDiv[8].squareType == "O"){
			console.log("O Wins");
		}
		///////////Diagonal///////
		else if(blankDiv[0].squareType == "O" &&  blankDiv[4].squareType == "O" && blankDiv[8].squareType == "O"){
			console.log("O Wins");
		}
		else if(blankDiv[2].squareType == "O" &&  blankDiv[4].squareType == "O" && blankDiv[6].squareType == "O"){
			console.log("O Wins");
		}
		else{
			return false;
		}
	}
}

var showWinner = function(champion){
	winner(champion) = true;
}


///Playing function/ logic
for(var i = 0; i< blankDiv.length;i++){
	blankDiv[i].addEventListener("click", function(){
		if(!this.alreadyClicked){
		    if(playerOnePlaying){
		        this.style.backgroundColor = "black"; 
		        this.innerHTML = xSquare;
		        this.squareType = "X";
		        winner(squareType);
		    }
		    else{
		      this.style.backgroundColor = "black";
		      this.innerHTML = oSquare;
		      this.squareType = "O";
		      winner(squareType);
		    }
			this.alreadyClicked = true;
		    playerOnePlaying = !playerOnePlaying;

		    if(playerOnePlaying && whoWon==false){
		    	messenger.innerHTML = "X Gonna Give It To Yuh!";
			    }
		    else if (!playerOnePlaying && whoWon==false){
			    messenger.innerHTML = "OH OH IT'S MAGIC!";  
		    }
		    // else if(playerOnePlaying && whoWon == true){
		    // 	messenger.innerHTML = "X WINS YUH DIG!!!";
		    // 	}
		    // else{
		    // 	messenger.innerHTML = "O IS ALL UP IN UR GRILL!!!!";
		    // 	}
		    }
  		}
	);
	this.alreadyClicked = false;
	this.squareType = '';
}

function reset(){
  for(var i = 0; i < blankDiv.length; i++){
    blankDiv[i].innerHTML = " ";
    blankDiv[i].style.backgroundColor = "red";
    messenger.style.fontSize = "24px";
    blankDiv[i].hasBeenClicked = false;
    blankDiv[i].markerValue = "";
    playerOnePlaying = true;
    whoWon = false;
    messenger.innerHTML = "X Gonna Give It To Yuh!";
  } 
}



// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", 
// picking the right suffix for the number based on what it is.

var hockeyTeams = ["Leafs", "Blackhawks", "Penguins", "Oilers", "Flyers", "Sharks", "Kings", "Red Wings" ]

for(var i=0; i < hockeyTeams.length; i++){
	if(i == 0){
		document.write("My " + (i+1) + "st choice is " + hockeyTeams[i] + "<br>");
	}
	else if (i == 1){
		document.write("My " + (i+1) + "nd choice is the " + hockeyTeams[i] + "<br>");
	}
	else if (i == 2){
		document.write("My " + (i+1) + "rd choice is the " + hockeyTeams[i] + "<br>");
	}
	else{
		document.write("My " + (i+1) + "th choice is the " + hockeyTeams[i] + "<br>");
	}
}

//this isn't the optimal solution, because it screws up after 20.
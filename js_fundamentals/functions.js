// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numChildren, partner, geoLocation, job) {
	return "You will be a " + job + " in " + geoLocation + ", and married to " + partner + " with " + numChildren + " kids."
}

tellFortune(5, "Kramer", "New York", "Kramerica Industries Assistant")
tellFortune(3, "Jerry", "New York", "Editor")
tellFortune(0, "George", "New York", "Stamp Licker")

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear) {
	var currentYear = new Date().getFullYear();
	var minAge = (currentYear - birthYear - 1);
	var maxAge = (currentYear - birthYear);
	return "You are either " + minAge + " or " + maxAge + "."
}


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amountPerDay) {
	deathAge = 120
	var totalNeeded = Math.round((deathAge - age) * (amountPerDay*365.25));
	return "You will need " + totalNeeded + " to last you until the ripe old age of " + deathAge + "."
}


// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".

function calcCircumfrence(radius) {
	var circumfrence = (Math.PI * radius * 2);
	return "The circumference is " + circumfrence + "."
}

// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcArea(radius) {
	var area = (Math.PI*(radius*radius));
	return "The area is " + area + "."
}


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

function celsiusToFarhenheit(celsius) {
	var fahrenheit = ((celsius * 9/5) + 32);
	return celsius + "°C is " + fahrenheit + "°F"
}

// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function fahrenheitToCelsius(fahrenheit) {
	var celsius = ((fahrenheit - 32) * 5/9);
	return fahrenheit + "°F is " + celsius + "°C"
}


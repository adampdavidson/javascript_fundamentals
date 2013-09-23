// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numChildren = 2;
var partnerName = "Sarah";
var geoLocation = "Thailand";
var jobTitle = "Scuba Instructor";

"You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numChildren + " kids."

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = Date().currentYear;
var birthYear = 1961;
var maxAge = (currentYear - birthYear);
var minAge = (currentYear - birthYear - 1);

"They are either " + minAge + " or " + maxAge


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 24;
var deathAge = 121;
var dailyAmount = 6;
var totalNeeded = ((deathAge - currentAge) * (dailyAmount*365.25))


"You will need " + totalNeeded + " to last you until the ripe old age of " + deathAge

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".


circleRadius = 20
circleCircumference = (Math.PI * (2 * circleRadius))
circleArea = (Math.PI * (circleRadius * circleRadius))

"The circumference is " + circleCircumference
"The area is " + circleArea

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

celsius = 12
fahrenheit = 100
toCelsius = (fahrenheit - 32) * 5/9
toFahrenheit = (celsius * 9/5) + 32

celsius + "°C is " + toFahrenheit + "°F"
fahrenheit + "°F is " + toCelsius + "°C"




// Console log a welcome message with instructions to mad libs
console.log("Hey! Welcome to Mad Libs! Lets get started.")


// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjective = prompt("please enter an adjective:")
let pluralNoun = prompt("please enter an a plural noun:")
let Verb = prompt("please enter a verb (present tense)")
let adjective2 = prompt("please enter a second adjective (Note: Please choose a different adjective that what you entered previously):")

// Create an array that stores the values the user entered

let newArray = []

newArray.push(adjective)
newArray.push(pluralNoun)
newArray.push(Verb)
newArray.push(adjective2)

// Console log the story with the array values passed into the blanks

console.log(`In a small ${newArray[0]} school in the Bronx, there was a problem with too many ${newArray[1]}. These ${newArray[1]}loved to ${newArray[2]}, which caused Mr. P so many headaches. However, no one wanted to remove them because they were too ${newArray[3]}so they stayed there forever.`)

// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive









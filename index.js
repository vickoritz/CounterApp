// document.getElementById("count-el").innerText = 5
//// this above reads; hey html document get me the element that has the id "count-el"

////////////////////// MISSION /////////////////////////
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
// myself: add a reduce button, that reduce count by -1
// 1. Create a function, save(), which logs out the count when it's called

let countEl = document.getElementById("count-el") // pass in arguments

console.log(countEl) // passing in what variable we want to pass in the console

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}


function reduce() {
    count = count -1
    countEl.innerText = count
    console.log(count)
}


function save() {
    console.log(count)
}

//////////////////////////////////////////////////

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

let name = "Victoria"
let greeting = "Welcome back, "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name
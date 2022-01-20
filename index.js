
let countEl = document.getElementById("count-el")
let countElGuest = document.getElementById("count-el-guest")
let saveEl = document.getElementById("save-el")

console.log(countEl) 

let count = 0
let countguest = 0

function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}

function incrementGuest() {
    countguest += 1
    countElGuest.textContent = countguest
    console.log(countguest)
}

function reduce() {
    count -= 1
    countEl.textContent = count
    console.log(count)
}

function reduceGuest() {
    countguest -= 1
    countElGuest.textContent = countguest
    console.log(countguest)

}

function save() {
    let countStr = count + " - " + countguest
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    countElGuest.textContent = 0
    countguest = 0
}

let welcomeEl = document.getElementById("welcome-el")

let name = "Victoria"
let greeting = "Welcome back, "

welcomeEl.innerText = greeting + name

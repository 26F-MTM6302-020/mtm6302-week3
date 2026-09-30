// MTM6302 — Week 3: Adopt a Tiny Monster
// Write one checkpoint at a time. Save and refresh to see your changes.

// 1. Change document.title.

document.title = "AC Monster Adoption Center"

console.log(document.title)
// 2. Select the name and mood. Change their textContent.

// select the name and mood elements from the DOM and store them in variables
let monsterName = document.getElementById("monster-name")
const moodText = document.querySelector("#monster-mood")

// change the textContent of the name and mood elements
monsterName.textContent = "SyntaxEater"
moodText.textContent = "Reporting for snack duty"

console.log(moodText)

// 3. Explore the snack list using children, firstElementChild,
//    and nextElementSibling. Inspect querySelectorAll() in the console.

const snackList = document.querySelector("#snack-list")

// using firstElementChild to get the first snack item
const firstSnack = snackList.firstElementChild

// using nextElementSibling to get the second snack item
const secondSnack = firstSnack.nextElementSibling
console.log(secondSnack)

// change the textContent of the first and second snack items
firstSnack.textContent = "Earth Chips"
secondSnack.textContent = "Sour Candy"

console.log(document.querySelectorAll(".snack"))


// 4. Read/change image attributes, reveal the certificate,
//    and experiment with classList.add(), remove(), and toggle().

// select the monster image, monster card, and certificate elements from the DOM
const monsterImage = document.querySelector("#monster-image")
const monsterCard = document.querySelector("#monster-card")
const certificate = document.querySelector("#certificate")

console.log(monsterImage)
// change the src and alt attributes of the monster image
monsterImage.setAttribute("src", "assets/happy.svg")
monsterImage.setAttribute("alt", "A happy green monster")

// reveal the certificate by removing the hidden attribute
certificate.removeAttribute("hidden")

// change the textContent of the certificate name to match the monster name
document.querySelector("#certificate-name").textContent = monsterName.textContent

// add, remove, and toggle classes on the monster card
monsterCard.classList.add("is-happy")
monsterCard.classList.remove("is-happy")
monsterCard.classList.toggle("party-mode")

// select the message text, certificate name, and energy text elements from the DOM
const messageText = document.getElementById("monster-message")
const certificateName = document.querySelector("#certificate-name")
const energyText = document.getElementById("monster-energy")

// 5. Use an energy number and if / else if / else to choose a mood.
let energy = 20

/*
    Creating a function named getMood that takes in energy as a parameter and returns a string based on the energy level. The function uses if / else if / else statements to determine the mood based on energy levels.
*/
function getMood(energy) {
    // using if / else if / else statements to determine the mood based on energy levels
    if (energy < 30) {
        return "Monster Sleepy"
    } else if (energy < 70) {
        return "Snack investigator"
    } else {
        return "Ready for chaos"
    }
}
/*
    Creating a function named updateMonster that updates the monster's mood, energy, image, and message based on the current energy level. The function uses the getMood function to determine the mood and updates the DOM elements accordingly.
*/
function updateMonster() {
    const mood = getMood(energy)
    moodText.textContent = mood
    energyText.textContent = energy

    monsterCard.classList.remove("is-sleepy", "is-hungry", "is-happy")

    if (energy < 30) {
        monsterCard.classList.add("is-sleepy")
        monsterImage.setAttribute("src", "assets/sleepy.svg")
        monsterImage.setAttribute("alt", "A sleepy greeen monster with closed eyes")
        messageText.textContent = "Currently buffering. Please send snacks."
    } else if (energy < 70) {
        monsterCard.classList.add("is-hunngry")
        monsterImage.setAttribute("src", "assets/hungry.svg")
        monsterImage.setAttribute("alt", "A hugry greeen monster with wide eyes and open mouth")
        messageText.textContent = "I smell a cookie in another browser tab."
    } else {
        monsterCard.classList.add("is-happy")
        monsterImage.setAttribute("src", "assets/happy.svg")
        monsterImage.setAttribute("alt", "A happy green monster with a big smile")
        messageText.textContent = "Enough energy to create some chaos on internet."
    }
}

/*
    Creating a function named feedMonster that takes in an amount as a parameter and adds it to the energy. The function checks if the energy is more than 100 or less than 0 and sets it accordingly. It then calls the updateMonster function to update the monster's mood, energy, image, and message based on the new energy level.
*/
function feedMonster(amount) {
    //  add amount to the energy
    // energy = energy + amount
    energy += amount
    // check if enerygy is more than 100 then set to 100 if it is less than 0 then set to 0
    if (energy > 100) {
        energy = 100
        console.log("cannot go above 100")
    } else if (energy < 0) {
        energy = 0
        console.log("cannot go below 0")
    }
    // call the updateMonster funciton
    updateMonster()
}
/*
    Creating a function named playMonster that takes in an amount as a parameter and subtracts it from the energy. The function checks if the energy is more than 100 or less than 0 and sets it accordingly. It then calls the updateMonster function to update the monster's mood, energy, image, and message based on the new energy level.
*/
function playMonster(amount) {
    //  remove amount from the energy
    energy -= amount
    // check if enerygy is more than 100 then set to 100 if it is less than 0 then set to 0
    if (energy > 100) {
        energy = 100
        console.log("cannot go above 100")
    } else if (energy < 0) {
        energy = 0
        console.log("cannot go below 0")
    }
    // call the updateMonster funciton
    updateMonster()
}

/*
    Creating a function named renameMonster that takes in a name as a parameter and updates the monster's name in the DOM.
*/
function renameMonster(name) {
    document.title += " - " + name
    monsterName.textContent = name
    certificateName.textContent = name
}
/*
    Creating a function named toggleParty that toggles the "party-mode" class on the monster card.
*/
function toggleParty() {
    monsterCard.classList.toggle("party-mode")
}
/*
    Creating a function named resetMonster that resets the monster's energy to 20, renames the monster to "Mochi", removes the "party-mode" class from the monster card, and calls the updateMonster function to update the monster's mood, energy, image, and message based on the new energy level.
*/
function resetMonster() {
    energy = 20
    renameMonster("Mochi")
    monsterCard.classList.remove("party-mode")
    updateMonster()
}
/*  
    Calling the resetMonster function to initialize the monster's energy, name, and mood.
*/
resetMonster()

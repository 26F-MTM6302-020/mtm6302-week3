// MTM6302 — Week 3: Adopt a Tiny Monster
// Write one checkpoint at a time. Save and refresh to see your changes.

// 1. Change document.title.

document.title = "AC Monster Adoption Center"

console.log(document.title)
// 2. Select the name and mood. Change their textContent.
let monsterName = document.getElementById("monster-name")
const moodText = document.querySelector("#monster-mood")

monsterName.textContent = "SyntaxEater"
moodText.textContent = "Reporting for snack duty"

console.log(moodText)

// 3. Explore the snack list using children, firstElementChild,
//    and nextElementSibling. Inspect querySelectorAll() in the console.
const snackList = document.querySelector("#snack-list")
const firstSnack = snackList.firstElementChild
const secondSnack = firstSnack.nextElementSibling
console.log(secondSnack)

firstSnack.textContent = "Earth Chips"
secondSnack.textContent = "Sour Candy"

console.log(document.querySelectorAll(".snack"))


// 4. Read/change image attributes, reveal the certificate,
//    and experiment with classList.add(), remove(), and toggle().
const monsterImage = document.querySelector("#monster-image")
const monsterCard = document.querySelector("#monster-card")
const certificate = document.querySelector("#certificate")

console.log(monsterImage)
monsterImage.setAttribute("src", "assets/happy.svg")
monsterImage.setAttribute("alt", "A happy green monster")

certificate.removeAttribute("hidden")

document.querySelector("#certificate-name").textContent = monsterName.textContent

monsterCard.classList.add("is-happy")
monsterCard.classList.remove("is-happy")
monsterCard.classList.toggle("party-mode")

const messageText = document.getElementById("monster-message")
const certificateName = document.querySelector("#certificate-name")
const energyText = document.getElementById("monster-energy")

// 5. Use an energy number and if / else if / else to choose a mood.
let energy = 20

function getMood(energy) {
    if (energy < 30) {
        return "Monster Sleepy"
    } else if (energy < 70) {
        return "Snack investigator"
    } else {
        return "Ready for chaos"
    }
}

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

function renameMonster(name) {
    document.title += " - " + name
    monsterName.textContent = name
    certificateName.textContent = name
}

function toggleParty() {
    monsterCard.classList.toggle("party-mode")
}

function resetMonster() {
    energy = 20
    renameMonster("Mochi")
    monsterCard.classList.remove("party-mode")
    updateMonster()
}

resetMonster()



// 6. Put display updates in updateMonster(). Add feedMonster(amount).

// 7. Extract getMood(energy), which returns a string.

// 8. Add your own messages. Test energy values 0, 29, 30, 69, 70, 100.

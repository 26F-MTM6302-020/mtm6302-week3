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

const mood = getMood(energy)
console.log(mood)

// 6. Put display updates in updateMonster(). Add feedMonster(amount).

// 7. Extract getMood(energy), which returns a string.

// 8. Add your own messages. Test energy values 0, 29, 30, 69, 70, 100.

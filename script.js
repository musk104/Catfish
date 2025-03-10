// 🎨 Fish Colors
const colors = ["#ffcc00", "#ff6666", "#66ccff", "#99ff99", "#ff99cc"];

// 🐟 Set Random Fish Color on Page Load
function setRandomFishColor() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty("--fish-color", randomColor);
}

// 📝 Display Fish Name
function setFishName() {
    let inputBox = document.getElementById("fish-name-input");
    let nameDisplay = document.getElementById("name-display");

    if (inputBox.value.trim() !== "") {
        nameDisplay.textContent = "This is " + inputBox.value + " 🐠";
        inputBox.value = ""; // Clear input after entering name
    }
}

// 🌊 Set Fish Color on Load
window.onload = setRandomFishColor;
// 🎈 Function to Create Bubbles
function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Random horizontal position
    bubble.style.left = Math.random() * 100 + "vw";

    // Random size (small, cute bubbles)
    let size = Math.random() * 10 + 5; // Between 5px and 15px
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    // Random animation duration (so they don’t all rise at the same speed)
    bubble.style.animationDuration = Math.random() * 3 + 4 + "s"; // Between 4s and 7s

    document.getElementById("bubbles").appendChild(bubble);

    // Remove bubble after it floats up
    setTimeout(() => {
        bubble.remove();
    }, 7000);
}

// 🌊 Create new bubbles every 500ms
setInterval(createBubble, 500);
// 🐠 Fish Click Interaction
document.getElementById("fish").addEventListener("click", function () {
    // Add a quick wiggle animation
    this.style.animation = "wiggle 0.3s ease-in-out";
    
    // Generate extra bubbles
    for (let i = 0; i < 5; i++) {
        createBubble();
    }

    // Remove animation after it plays
    setTimeout(() => {
        this.style.animation = "";
    }, 300);
});

// 🎬 Wiggle Animation (CSS)
const style = document.createElement("style");
style.innerHTML = `
@keyframes wiggle {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
    75% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
}`;
document.head.appendChild(style);
// Function to create a new jellyfish
function spawnJellyfish() {
    let jellyfish = document.createElement("div");
    jellyfish.classList.add("jellyfish");

    // Randomly decide if it spawns on the left or right
    let isLeft = Math.random() > 0.5;
    jellyfish.style.left = isLeft ? "10%" : "80%";

    // Add tentacles
    let tentacleContainer = document.createElement("div");
    tentacleContainer.classList.add("tentacles");

    for (let i = 0; i < 3; i++) {
        let tentacle = document.createElement("div");
        tentacle.classList.add("tentacle");
        tentacleContainer.appendChild(tentacle);
    }

    jellyfish.appendChild(tentacleContainer);
    document.body.appendChild(jellyfish);

    // Remove jellyfish after it disappears
    setTimeout(() => {
        jellyfish.remove();
    }, 10000);
}

// Spawn a new jellyfish every 10 seconds
setInterval(spawnJellyfish, 10000);
function spawnJellyfish(side) {
    let jellyfish = document.createElement("div");
    jellyfish.classList.add("jellyfish");

    // Set position based on side
    jellyfish.style.left = side === "left" ? "10%" : "80%";

    // Add tentacles
    let tentacleContainer = document.createElement("div");
    tentacleContainer.classList.add("tentacles");

    for (let i = 0; i < 3; i++) {
        let tentacle = document.createElement("div");
        tentacle.classList.add("tentacle");
        tentacleContainer.appendChild(tentacle);
    }

    jellyfish.appendChild(tentacleContainer);
    document.body.appendChild(jellyfish);

    // Remove jellyfish after it disappears
    setTimeout(() => {
        jellyfish.remove();
    }, 10000);
}

// Spawn a jellyfish on both sides every 10 seconds
setInterval(() => {
    spawnJellyfish("left");
    spawnJellyfish("right");
}, 10000);
// 🫧 Fish Blows Big Bubbles Randomly
function createBigBubble() {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.width = "20px";
    bubble.style.height = "20px";
    bubble.style.left = `${Math.random() * 100}%`;
    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 3000);
}
setInterval(createBigBubble, 5000);  // Big bubble every 5 sec

// 🎨 Click Fish to Change Color
document.getElementById("fish").addEventListener("click", function () {
    let colors = ["orange", "yellow", "blue", "pink", "green"];
    this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

// 🪼 Night Mode - Glow Jellyfish
function toggleNightMode() {
    document.body.classList.toggle("night-mode");
}
setInterval(toggleNightMode, 15000);  // Toggle every 15 sec
// 🦀 Crab moves side to side
setInterval(() => {
    let crab = document.getElementById("crab");
    let newPosition = crab.style.left === "10%" ? "80%" : "10%";
    crab.style.left = newPosition;
}, 6000);
// 🦀 Make the crab move side to side
let crab = document.getElementById("crab");
let movingRight = true;

function moveCrab() {
    if (movingRight) {
        crab.style.left = "80%";
    } else {
        crab.style.left = "10%";
    }
    movingRight = !movingRight;
}

setInterval(moveCrab, 5000); // Move every 5 seconds
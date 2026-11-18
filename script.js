// ==========================================
// AASHI — A WORLD BEYOND DISTANCE
// Created by Nikunj ❤️
// ==========================================


// MUSIC SYSTEM

const music = document.getElementById("bgMusic");

const musicText = document.getElementById("musicText");

const musicIcon = document.getElementById("musicIcon");


function updateMusic() {

    if (music.paused) {

        musicText.innerText = "PLAY MUSIC";

        musicIcon.innerText = "♫";

    } else {

        musicText.innerText = "NOW PLAYING";

        musicIcon.innerText = "♪";

    }

}


async function startMusic() {

    try {

        await music.play();

        updateMusic();

    } catch (error) {

        musicText.innerText = "TAP TO PLAY";

    }

}


// Autoplay attempt

window.addEventListener("load", () => {

    startMusic();

});


// First interaction fallback

document.addEventListener("click", () => {

    if (music.paused) {

        startMusic();

    }

}, { once: true });


function toggleMusic() {

    if (music.paused) {

        startMusic();

    } else {

        music.pause();

        updateMusic();

    }

}


// ==========================================
// ENTER WEBSITE
// ==========================================

function enterWebsite() {

    startMusic();

    const main = document.getElementById("mainContent");

    main.classList.remove("hidden");

    setTimeout(() => {

        main.scrollIntoView({
            behavior: "smooth"
        });

    }, 100);

    createParticles();

}


// ==========================================
// LETTER SYSTEM
// ==========================================

const letters = [

    {
        icon: "🏡",

        title: "A little piece of home",

        message: "Aashi, kabhi ghar ki yaad aaye toh yaad rakhna ki yahan tumhare liye hamesha ek jagah hai. Tumhari favourite jagah, tumhari family aur tumhara annoying brother hamesha tumhara intezaar karenge. ❤️"

    },

    {
        icon: "🖤",

        title: "A little reminder",

        message: "Bad days aate hain aur chale jaate hain. Khud ko kabhi kam mat samajhna. Tum bahut special ho aur tumhare andar har mushkil face karne ki strength hai. Keep smiling, little one. ❤️"

    },

    {
        icon: "😂",

        title: "Missing your brother?",

        message: "Obviously! Itna amazing aur irritating brother aur kahan milega? 😂 Jokes apart, jab bhi mann kare call kar lena. Main hamesha tumhare liye available hoon. Love you!"

    },

    {
        icon: "✨",

        title: "You can do it!",

        message: "Believe in yourself, Aashi. Apne dreams ke liye mehnat karo, naye experiences lo aur kabhi give up mat karna. We are always proud of you. Keep shining!"

    }

];


function openLetter(index) {

    const letter = letters[index];

    document.getElementById("modalIcon").innerText =
        letter.icon;

    document.getElementById("modalTitle").innerText =
        letter.title;

    document.getElementById("modalMessage").innerText =
        letter.message;

    document.getElementById("letterModal")
        .classList.add("active");

}


function closeLetter() {

    document.getElementById("letterModal")
        .classList.remove("active");

}


// ==========================================
// SPECIAL SURPRISE
// ==========================================

function sendHug() {

    const screen = document.getElementById("hugScreen");

    const container = document.getElementById("hugHearts");

    screen.classList.add("active");

    container.innerHTML = "";

    document.getElementById("hugMessage").innerText =
        "Hey Aashi! Imagine your annoying brother giving you the biggest bear hug right now. Distance may separate us, but nothing can change our bond. Take care of yourself. Love you loads! ❤️";


    // 50 floating hearts

    for (let i = 0; i < 50; i++) {

        const heart = document.createElement("span");

        heart.className = "hug-heart";

        heart.innerText = [
            "❤️",
            "♥",
            "💗",
            "💕",
            "✨"
        ][Math.floor(Math.random() * 5)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 5000);

    }

}


function closeHug() {

    document.getElementById("hugScreen")
        .classList.remove("active");

}


// ==========================================
// BACKGROUND PARTICLES
// ==========================================

let particlesStarted = false;

function createParticles() {

    if (particlesStarted) return;

    particlesStarted = true;

    const container = document.getElementById("particles");

    function makeParticle() {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.innerText = [
            "✦",
            "✧",
            "♥",
            "⋆",
            "·"
        ][Math.floor(Math.random() * 5)];

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.fontSize =
            (10 + Math.random() * 15) + "px";

        const duration = 5000 + Math.random() * 5000;

        particle.style.animationDuration =
            duration + "ms";

        container.appendChild(particle);

        setTimeout(() => {

            particle.remove();

        }, duration);

    }


    // Keep creating particles

    setInterval(makeParticle, 350);

}


// ==========================================
// CLOSE MODALS WITH ESCAPE
// ==========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeLetter();

        closeHug();

    }

});


// ==========================================
// CLOSE MODALS BY CLICKING OUTSIDE
// ==========================================

document.getElementById("letterModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeLetter();

        }

    });


document.getElementById("hugScreen")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeHug();

        }

    });
"use strict";

/* =========================================================
   SANJANA BIRTHDAY WEBSITE
   APPLICATION LOGIC
   ========================================================= */


/* =========================================================
   1. PROFILE DATA
   ========================================================= */

const profile = {

    name: "Sanjana",

    password: "Lambu",

    welcomeSubtitle: "Today is all about you.",

    letter: `Dear Lambu,

Happy Birthday! ❤️

Kuch log life mein bas dost banke nahi aate,
balki apni ek alag si jagah bana lete hain.
Tu bhi unhi logon mein se ek hai.

Tere saath bitaye hue moments, random baatein,
hasi-mazaak aur woh chhoti-chhoti memories —
shayad us waqt normal lagti hain,
lekin baad mein wahi sabse special ban jaati hain.

Teri tarah har kisi ko Aankhon ke Noor nahi milte,
Dost toh sab ko mil jaate hai lakin tere jaisa Kohinoor nahi milte...!! ❤️

Bas aise hi rehna — thodi crazy,
thodi annoying aur bilkul apni tarah.

I hope tera ye birthday sirf ek aur date banke na reh jaaye,
balki aisi memories de jaaye jinhe yaad karke
baad mein bhi smile aa jaaye.

Happy Birthday once again, Lambu. 🎂❤️`,

   memories: [

    {
        type: "image",
        src: "photo01.jpeg",
        caption: "A memory worth keeping."
    },

    {
        type: "image",
        src: "photo02.jpeg",
        caption: "One of those good moments."
    },

    {
        type: "image",
        src: "photo03.jpeg",
        caption: "A moment worth remembering."
    },

    {
        type: "image",
        src: "photo04.jpeg",
        caption: "Some memories just stay."
    },

    {
        type: "image",
        src: "photo05.jpeg",
        caption: "A little moment, a lot of memories."
    },

    {
        type: "image",
        src: "photo06.jpeg",
        caption: "Another one for the memories."
    },

    {
        type: "image",
        src: "photo07.jpeg",
        caption: "Just one of those days."
    },

    {
        type: "image",
        src: "photo08.jpeg",
        caption: "A memory worth keeping."
    },

    {
        type: "image",
        src: "photo09.jpeg",
        caption: "Good times, good memories."
    },

    {
        type: "image",
        src: "photo10.jpeg",
        caption: "Another chapter to remember."
    },

    {
        type: "image",
        src: "photo11.jpeg",
        caption: "And one more memory."
    }

],

    finalMessage: `Some people become a part of your life without even trying.
And somehow, you became one of those people. ❤️`,

    signature: "Mansi"

};


/* =========================================================
   2. APPLICATION STATE
   ========================================================= */

const appState = {

    currentMemoryIndex: 0,

    isUnlocked: false

};


/* =========================================================
   3. SCREEN ELEMENTS
   ========================================================= */

const landingScreen =
    document.getElementById("landing-screen");

const passwordScreen =
    document.getElementById("password-screen");

const welcomeScreen =
    document.getElementById("welcome-screen");

const memoriesScreen =
    document.getElementById("memories-screen");

const finalScreen =
    document.getElementById("final-screen");


/* =========================================================
   4. PASSWORD ELEMENTS
   ========================================================= */

const enterButton =
    document.getElementById("enter-button");

const passwordForm =
    document.getElementById("password-form");

const passwordInput =
    document.getElementById("password-input");

const passwordToggle =
    document.getElementById("password-toggle");

const passwordError =
    document.getElementById("password-error");


/* =========================================================
   5. WELCOME ELEMENTS
   ========================================================= */

const welcomeTitle =
    document.getElementById("welcome-title");

const welcomeSubtitle =
    document.getElementById("welcome-subtitle");

const letterCard =
    document.getElementById("letter-card");

const letterContent =
    document.getElementById("letter-content");

const letterSignature =
    document.getElementById("letter-signature");

const memoriesButton =
    document.getElementById("memories-button");


/* =========================================================
   6. MEMORIES ELEMENTS
   ========================================================= */

const memoriesHomeButton =
    document.getElementById("memories-home-button");

const lockButton =
    document.getElementById("lock-button");

const mediaFrame =
    document.querySelector(".media-frame");

const mediaContainer =
    document.getElementById("media-container");

const currentMediaNumber =
    document.getElementById("current-media-number");

const totalMediaNumber =
    document.getElementById("total-media-number");

const previousButton =
    document.getElementById("previous-button");

const nextButton =
    document.getElementById("next-button");

const mediaCaption =
    document.getElementById("media-caption");

const fullscreenButton =
    document.getElementById("fullscreen-button");


/* =========================================================
   7. FINAL SCREEN ELEMENTS
   ========================================================= */

const finalName =
    document.getElementById("final-name");

const finalMessage =
    document.getElementById("final-message");

const finalHomeButton =
    document.getElementById("final-home-button");

const finalRevealButton =
    document.getElementById("final-reveal-button");


/* =========================================================
   8. SHOW SCREEN
   ========================================================= */

function showScreen(screenToShow) {

    const screens = [

        landingScreen,
        passwordScreen,
        welcomeScreen,
        memoriesScreen,
        finalScreen

    ];


    screens.forEach(function (screen) {

        if (screen) {

            screen.hidden = true;

        }

    });


    if (screenToShow) {

        screenToShow.hidden = false;

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================================
   9. LANDING → PASSWORD
   ========================================================= */

enterButton.addEventListener(
    "click",
    function () {

        showScreen(passwordScreen);

        passwordInput.value = "";

        passwordError.hidden = true;

        passwordInput.type = "password";

        passwordToggle.textContent = "Show";


        setTimeout(function () {

            passwordInput.focus();

        }, 100);

    }
);


/* =========================================================
   10. SHOW / HIDE PASSWORD
   ========================================================= */

passwordToggle.addEventListener(
    "click",
    function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            passwordToggle.textContent = "Hide";

            passwordToggle.setAttribute(
                "aria-label",
                "Hide password"
            );

        } else {

            passwordInput.type = "password";

            passwordToggle.textContent = "Show";

            passwordToggle.setAttribute(
                "aria-label",
                "Show password"
            );

        }

    }
);


/* =========================================================
   11. PASSWORD SUBMIT
   ========================================================= */

passwordForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const enteredPassword =
            passwordInput.value.trim();


        if (enteredPassword === "") {

            passwordError.textContent =
                "Please enter your password.";

            passwordError.hidden = false;

            passwordInput.focus();

            return;

        }


        if (enteredPassword === profile.password) {

            appState.isUnlocked = true;

            passwordError.hidden = true;

            openWelcomeScreen();

            return;

        }


        passwordError.textContent =
            "That doesn't seem right. Try again.";

        passwordError.hidden = false;

        passwordInput.select();

    }
);


/* =========================================================
   12. OPEN WELCOME SCREEN
   ========================================================= */

function openWelcomeScreen() {

    welcomeTitle.textContent =
        `WELCOME, ${profile.name.toUpperCase()}`;


    welcomeSubtitle.textContent =
        profile.welcomeSubtitle;


    letterSignature.textContent =
        `— ${profile.signature}`;


    if (
        typeof profile.letter === "string" &&
        profile.letter.trim() !== ""
    ) {

        letterContent.textContent =
            profile.letter;

        letterCard.hidden = false;

    } else {

        letterCard.hidden = true;

    }


    showScreen(welcomeScreen);

}


/* =========================================================
   13. WELCOME → MEMORIES
   ========================================================= */

memoriesButton.addEventListener(
    "click",
    function () {

        appState.currentMemoryIndex = 0;

        showScreen(memoriesScreen);

        renderMemory();

    }
);


/* =========================================================
   14. RENDER CURRENT MEMORY
   ========================================================= */

function renderMemory() {

    mediaContainer.innerHTML = "";


    const totalMemories =
        profile.memories.length;


    totalMediaNumber.textContent =
        String(totalMemories).padStart(2, "0");


    if (totalMemories === 0) {

        currentMediaNumber.textContent = "00";

        mediaCaption.textContent =
            "No memories added yet.";

        previousButton.disabled = true;

        nextButton.disabled = true;

        fullscreenButton.disabled = true;

        return;

    }


    /*
     * Safety check.
     */

    if (
        appState.currentMemoryIndex < 0 ||
        appState.currentMemoryIndex >= totalMemories
    ) {

        appState.currentMemoryIndex = 0;

    }


    const memory =
        profile.memories[
            appState.currentMemoryIndex
        ];


    currentMediaNumber.textContent =
        String(
            appState.currentMemoryIndex + 1
        ).padStart(2, "0");


    mediaCaption.textContent =
        memory.caption || "";


    fullscreenButton.disabled = false;


    if (memory.type === "image") {

        renderImage(memory);

    }

    else if (memory.type === "video") {

        renderVideo(memory);

    }

    else {

        mediaCaption.textContent =
            "This memory type is not supported.";

        fullscreenButton.disabled = true;

    }


    updateNavigationButtons();

}


/* =========================================================
   15. RENDER IMAGE
   ========================================================= */

function renderImage(memory) {

    const image =
        document.createElement("img");


    image.src =
        memory.src;


    image.alt =
        memory.caption ||
        "Birthday memory";


    image.loading = "eager";


    image.decoding = "async";


    image.addEventListener(
        "error",
        function () {

            mediaContainer.innerHTML = "";

            mediaCaption.textContent =
                "This memory couldn't be loaded.";

            fullscreenButton.disabled = true;

        }
    );


    mediaContainer.appendChild(image);

}


/* =========================================================
   16. RENDER VIDEO
   ========================================================= */

function renderVideo(memory) {

    const video =
        document.createElement("video");


    video.src =
        memory.src;

    video.controls = true;

    video.preload = "metadata";

    video.playsInline = true;


    video.addEventListener(
        "error",
        function () {

            mediaContainer.innerHTML = "";

            mediaCaption.textContent =
                "This memory couldn't be loaded.";

            fullscreenButton.disabled = true;

        }
    );


    mediaContainer.appendChild(video);

}


/* =========================================================
   17. UPDATE NAVIGATION BUTTONS
   ========================================================= */

function updateNavigationButtons() {

    const total =
        profile.memories.length;


    if (total <= 1) {

        previousButton.disabled = true;

        nextButton.disabled = true;

        return;

    }


    previousButton.disabled = false;

    nextButton.disabled = false;

}


/* =========================================================
   18. PREVIOUS MEMORY
   ========================================================= */

function showPreviousMemory() {

    const total =
        profile.memories.length;


    if (total === 0) {

        return;

    }


    appState.currentMemoryIndex =
        (
            appState.currentMemoryIndex -
            1 +
            total
        ) % total;


    renderMemory();

}


/* =========================================================
   19. NEXT MEMORY
   ========================================================= */

function showNextMemory() {

    const total =
        profile.memories.length;


    if (total === 0) {

        return;

    }


    appState.currentMemoryIndex =
        (
            appState.currentMemoryIndex +
            1
        ) % total;


    renderMemory();

}


/* =========================================================
   20. PREVIOUS / NEXT BUTTONS
   ========================================================= */

previousButton.addEventListener(
    "click",
    function () {

        showPreviousMemory();

    }
);


nextButton.addEventListener(
    "click",
    function () {

        showNextMemory();

    }
);


/* =========================================================
   21. MOBILE SWIPE NAVIGATION
   ========================================================= */

let touchStartX = 0;
let touchStartY = 0;

let touchEndX = 0;
let touchEndY = 0;


/*
 * Finger touches the media.
 */

mediaFrame.addEventListener(
    "touchstart",
    function (event) {

        const touch =
            event.touches[0];

        touchStartX =
            touch.clientX;

        touchStartY =
            touch.clientY;

    },
    {
        passive: true
    }
);


/*
 * Finger leaves the media.
 */

mediaFrame.addEventListener(
    "touchend",
    function (event) {

        const touch =
            event.changedTouches[0];

        touchEndX =
            touch.clientX;

        touchEndY =
            touch.clientY;


        const differenceX =
            touchEndX - touchStartX;

        const differenceY =
            touchEndY - touchStartY;


        /*
         * If the movement was mostly vertical,
         * let the page scroll normally.
         */

        if (
            Math.abs(differenceY) >
            Math.abs(differenceX)
        ) {

            return;

        }


        /*
         * Ignore tiny movements.
         */

        if (
            Math.abs(differenceX) < 50
        ) {

            return;

        }


        /*
         * LEFT → NEXT
         */

        if (differenceX < 0) {

            showNextMemory();

        }


        /*
         * RIGHT → PREVIOUS
         */

        else {

            showPreviousMemory();

        }

    },
    {
        passive: true
    }
);


/* =========================================================
   22. KEYBOARD NAVIGATION
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            appState.isUnlocked === false ||
            memoriesScreen.hidden === true
        ) {

            return;

        }


        const activeElement =
            document.activeElement;


        if (
            activeElement &&
            (
                activeElement.tagName === "INPUT" ||
                activeElement.tagName === "TEXTAREA"
            )
        ) {

            return;

        }


        if (event.key === "ArrowLeft") {

            event.preventDefault();

            showPreviousMemory();

        }


        if (event.key === "ArrowRight") {

            event.preventDefault();

            showNextMemory();

        }

    }
);


/* =========================================================
   23. FULLSCREEN
   ========================================================= */

async function toggleFullscreen() {

    if (!mediaFrame) {

        return;

    }


    try {

        if (!document.fullscreenElement) {

            if (
                mediaFrame.requestFullscreen
            ) {

                await mediaFrame.requestFullscreen();

            }

        }

        else {

            if (
                document.exitFullscreen
            ) {

                await document.exitFullscreen();

            }

        }

    }

    catch (error) {

        console.error(
            "Fullscreen error:",
            error
        );

    }

}


fullscreenButton.addEventListener(
    "click",
    toggleFullscreen
);


/* =========================================================
   24. FULLSCREEN BUTTON STATE
   ========================================================= */

function updateFullscreenButton() {

    const text =
        fullscreenButton.querySelector("span");


    if (document.fullscreenElement) {

        if (text) {

            text.textContent =
                "Exit Fullscreen";

        }

    }

    else {

        if (text) {

            text.textContent =
                "Fullscreen";

        }

    }

}


document.addEventListener(
    "fullscreenchange",
    updateFullscreenButton
);


/* =========================================================
   25. MEMORIES HOME
   ========================================================= */

memoriesHomeButton.addEventListener(
    "click",
    function () {

        exitFullscreenIfNeeded();

        showScreen(welcomeScreen);

    }
);


/* =========================================================
   26. LOCK
   ========================================================= */

lockButton.addEventListener(
    "click",
    function () {

        exitFullscreenIfNeeded();

        appState.isUnlocked = false;

        showScreen(passwordScreen);

        passwordInput.value = "";

        passwordError.hidden = true;

        passwordInput.type = "password";

        passwordToggle.textContent = "Show";

    }
);


/* =========================================================
   27. EXIT FULLSCREEN
   ========================================================= */

function exitFullscreenIfNeeded() {

    if (
        document.fullscreenElement &&
        document.exitFullscreen
    ) {

        document.exitFullscreen();

    }

}


/* =========================================================
   28. OPEN FINAL SCREEN
   ========================================================= */

function openFinalScreen() {

    finalName.textContent =
        profile.name.toUpperCase();


    if (
        typeof profile.finalMessage === "string" &&
        profile.finalMessage.trim() !== ""
    ) {

        finalMessage.textContent =
            profile.finalMessage;

        finalMessage.hidden = false;

    }

    else {

        finalMessage.hidden = true;

    }


    showScreen(finalScreen);

}


/* =========================================================
   29. MEMORIES → FINAL
   ========================================================= */

if (finalRevealButton) {

    finalRevealButton.addEventListener(
        "click",
        function () {

            openFinalScreen();

        }
    );

}


/* =========================================================
   30. FINAL → HOME
   ========================================================= */

finalHomeButton.addEventListener(
    "click",
    function () {

        showScreen(welcomeScreen);

    }
);


/* =========================================================
   31. INITIALIZE
   ========================================================= */

function init() {

    showScreen(landingScreen);

}


init();
/* ==========================================
FOREVER US
Made with ❤️ by Jane
========================================== */

/* ==========================================
MUSIC PLAYER
========================================== */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "⏸ Pause Our Song";

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 Play Our Song";

    }

});

/* ==========================================
SMOOTH SCROLL
========================================== */

const scrollBtn = document.getElementById("scrollBtn");

scrollBtn.addEventListener("click", () => {

    document.getElementById("letter").scrollIntoView({

        behavior: "smooth"

    });

});

/* ==========================================
FLOATING HEARTS
========================================== */

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 350);

/* ==========================================
LOVE LETTER
========================================== */

const openLetter = document.getElementById("openLetter");

const letter = document.getElementById("letterContent");

const typedText = document.getElementById("typedText");

const message = `

My Dearest Maina,

From the moment you came into my life,
everything became brighter.

You make me smile when I don't even realize I need it.

You are my peace,
my happiness,
my best friend,
and the love of my life.

Thank you for always believing in me,
supporting me,
and making every day special.

No matter where life takes us,
I will always choose you.

Forever yours,

❤️ Jane ❤️

`;

let index = 0;

function typeWriter() {

    if (index < message.length) {

        typedText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 40);

    }

}

openLetter.addEventListener("click", () => {

    letter.style.display = "block";

    openLetter.style.display = "none";

    typedText.innerHTML = "";

    index = 0;

    typeWriter();

});

/* ==========================================
RELATIONSHIP COUNTDOWN
========================================== */

const relationshipDate = new Date("2023-12-31T00:00:00");

function updateCountdown() {

    const now = new Date();

    let years = now.getFullYear() - relationshipDate.getFullYear();

    let months = now.getMonth() - relationshipDate.getMonth();

    let days = now.getDate() - relationshipDate.getDate();

    if (days < 0) {

        months--;

        const previousMonth = new Date(

            now.getFullYear(),

            now.getMonth(),

            0

        );

        days += previousMonth.getDate();

    }

    if (months < 0) {

        years--;

        months += 12;

    }

    const totalMilliseconds = now - relationshipDate;

    const totalSeconds = Math.floor(totalMilliseconds / 1000);

    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);

    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const seconds = totalSeconds % 60;

    document.getElementById("years").textContent = years;

    document.getElementById("months").textContent = months;

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown, 1000);
/* ==========================================
GALLERY LIGHTBOX
========================================== */

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});


const reasons = [

"Because your smile can brighten even my darkest days.",
"Because you love me for who I truly am.",
"Because you always know how to make me laugh.",
"Because your hugs feel like the safest place in the world.",
"Because every moment with you becomes a beautiful memory.",
"Because you support my dreams without hesitation.",
"Because you're my best friend and my favorite person.",
"Because you make my heart feel at home.",
"Because you never stop believing in me.",
"Because your kindness inspires me every day.",
"Because you make ordinary days feel extraordinary.",
"Because you are patient with me even when I'm difficult.",
"Because I can be completely myself around you.",
"Because your voice instantly calms me.",
"Because you always know how to cheer me up.",
"Because you make me feel beautiful just by being yourself.",
"Because you make me excited about the future.",
"Because you listen to me when I need someone.",
"Because your happiness means so much to me.",
"Because you respect me and my feelings.",
"Because every goodbye makes me look forward to our next hello.",
"Because you are one of the greatest blessings in my life.",
"Because you make love feel easy and genuine.",
"Because every day with you gives me another reason to smile.",
"Because I simply love you with all my heart.",
"Because you always make me feel loved.",
"Because you're the first person I want to tell everything to.",
"Because your laugh is one of my favorite sounds.",
"Because you're always there when I need you.",
"Because you make me feel safe no matter what.",
"Because you encourage me to become a better person.",
"Because every little thing reminds me of you.",
"Because you're thoughtful in ways that matter.",
"Because you never give up on us.",
"Because your love gives me strength.",
"Because you understand me even when I don't say much.",
"Because you're worth every second we spend together.",
"Because you make every hug feel magical.",
"Because I miss you even before we've said goodbye.",
"Because you're the reason behind so many of my smiles.",
"Because you make me believe in forever.",
"Because you make my heart race in the best way.",
"Because you accept all my flaws.",
"Because you celebrate my successes as if they were your own.",
"Because you comfort me during my difficult moments.",
"Because you make me feel important.",
"Because every memory with you is precious to me.",
"Because your heart is beautiful.",
"Because you always give me something to look forward to.",
"Because I fall in love with you a little more every single day.",
"Because your hugs always make everything feel okay.",
"Because you make my world brighter.",
"Because you always know how to make me smile.",
"Because every day with you is an adventure.",
"Because you're my favorite notification.",
"Because your love makes me feel complete.",
"Because you always make time for me.",
"Because you inspire me to dream bigger.",
"Because your heart is full of kindness.",
"Because you're honest with me.",
"Because I admire your strength.",
"Because you're my greatest comfort.",
"Because you make me feel understood.",
"Because you're always worth waiting for.",
"Because I love the little things you do.",
"Because your presence makes every place feel like home.",
"Because you believe in us.",
"Because you always treat me with respect.",
"Because you're the reason my heart smiles.",
"Because you make even the simplest moments unforgettable.",
"Because you never stop caring about me.",
"Because your love gives me peace.",
"Because you always encourage me when I feel discouraged.",
"Because you're the person I want beside me through every stage of life.",
"Because loving you is the easiest thing I've ever done.",
"Because every day I discover something new to love about you.",
"Because you're my answered prayer.",
"Because you always make me feel appreciated.",
"Because you're my happy place.",
"Because I love every memory we've created together.",
"Because you make my future look beautiful.",
"Because you always know how to calm my worries.",
"Because you make distance feel smaller with your love.",
"Because you're my favorite chapter in life's story.",
"Because your love has changed me for the better.",
"Because I can laugh endlessly with you.",
"Because you always remind me I'm not alone.",
"Because you're the person I trust the most.",
"Because you make every celebration more meaningful.",
"Because I can't imagine my life without you.",
"Because your love is one of the greatest gifts I've ever received.",
"Because every heartbeat reminds me how lucky I am to have you.",
"Because you make forever sound exciting.",
"Because you're the person I want to grow old with.",
"Because no matter where life takes us, I'll always choose you.",
"Because you're my best decision.",
"Because you're my greatest blessing.",
"Because you are, and always will be, my favorite person.",
"Because my heart found its home the day it found you.",
"Because if I had to live my life a thousand times over, I'd still choose you in every single lifetime. I love you forever, Maina. ❤️"
];


let currentReason = 0;

const reasonNumber = document.getElementById("reasonNumber");

const reasonText = document.getElementById("reasonText");

const nextReason = document.getElementById("nextReason");

nextReason.addEventListener("click",()=>{

    currentReason++;

    if(currentReason >= reasons.length){

        currentReason = 0;

    }

    reasonNumber.textContent = `Reason #${currentReason+1}`;

    reasonText.textContent = reasons[currentReason];

});

/* ==========================================
LOVE QUOTES
========================================== */

const quotes=[

"You are my favorite hello and my hardest goodbye. ❤️",

"I still fall for you every single day. ❤️",

"You are my today and all my tomorrows.",

"Home isn't a place anymore... it's you.",

"You are my greatest adventure.",

"I'll always choose you.",

"Every love story is beautiful, but ours is my favorite.",

"Forever isn't long enough with you.",

"You're the best thing that's ever happened to me.",

"You complete my heart."

];

let quoteIndex=0;

const quoteText=document.getElementById("quoteText");

setInterval(()=>{

quoteIndex++;

if(quoteIndex>=quotes.length){

quoteIndex=0;

}

quoteText.style.opacity="0";

setTimeout(()=>{

quoteText.textContent=quotes[quoteIndex];

quoteText.style.opacity="1";

},400);

},5000);

/* ==========================================
SCROLL REVEAL
========================================== */

const revealElements=document.querySelectorAll(

".timeline-card,.memory-card,.quality-card,.dream-card,.gallery-img,.reason-box,.quote-slider"

);

function revealOnScroll(){

const trigger=window.innerHeight*0.85;

revealElements.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<trigger){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

}

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition="all .8s ease";

});

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();
/* ==========================================
SECRET MESSAGE
========================================== */

const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

secretBtn.addEventListener("click", () => {

    if (secretMessage.style.display === "block") {

        secretMessage.style.display = "none";
        secretBtn.innerHTML = "Don't Click ❤️";

    } else {

        secretMessage.style.display = "block";
        secretBtn.innerHTML = "Hide Secret ❤️";

        secretMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

});

/* ==========================================
CONFETTI
========================================== */

const confettiContainer = document.getElementById("confetti-container");

const confettiColors = [
"#ff4f87",
"#ffb6c1",
"#ffd700",
"#ffffff",
"#ff69b4",
"#ffc0cb"
];

function createConfetti(){

    for(let i = 0; i < 180; i++){

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random()*100 + "%";

        confetti.style.background =
        confettiColors[Math.floor(Math.random()*confettiColors.length)];

        confetti.style.animationDuration =
        (3 + Math.random()*3) + "s";

        confetti.style.animationDelay =
        Math.random()*2 + "s";

        confettiContainer.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },7000);

    }

}

/* ==========================================
FOREVER BUTTONS
========================================== */

const yesButtons = document.querySelectorAll(".yesBtn");
const celebration = document.getElementById("celebrationMessage");

yesButtons.forEach(button=>{

button.addEventListener("click",()=>{

celebration.style.display="block";

celebration.scrollIntoView({

behavior:"smooth"

});

createConfetti();

/* Music starts if not already playing */

if(music.paused){

music.play();

musicBtn.innerHTML="⏸ Pause Our Song";

}

});

});

/* ==========================================
BACK TO TOP
========================================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================================
LOVE MESSAGE IN TAB
========================================== */

const originalTitle=document.title;

window.addEventListener("blur",()=>{

document.title="❤️ Come Back My Love ❤️";

});

window.addEventListener("focus",()=>{

document.title=originalTitle;

});

/* ==========================================
PHOTO GLOW EFFECT
========================================== */

const photo=document.querySelector(".photo");

setInterval(()=>{

photo.style.boxShadow="0 0 60px rgba(255,79,135,.8)";

setTimeout(()=>{

photo.style.boxShadow="0 0 30px rgba(255,79,135,.4)";

},1200);

},2500);

/* ==========================================
SECTION FADE
========================================== */

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});

/* ==========================================
HEART CURSOR
========================================== */

document.addEventListener("click",(e)=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.fontSize="24px";

heart.style.zIndex="99999";

heart.style.transition="1.5s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-80px) scale(2)";

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},1600);

});

/* ==========================================
WELCOME MESSAGE
========================================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

alert("❤️ Welcome Maina ❤️\n\nThis little website was made with all my love just for you.\n\nI hope every section reminds you how much you mean to me.\n\nForever Yours,\nJane ❤️");

},1200);

});

/* ==========================================
END
========================================== */

console.log("❤️ Forever Us loaded successfully ❤️");
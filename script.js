/*==================================
OUR STORY
JAVASCRIPT PART 1
==================================*/
window.addEventListener("pageshow",()=>{

document.querySelectorAll(".chapter").forEach(section=>{

section.style.opacity="1";

section.style.visibility="visible";

});

});

/*=========================
SELECT ELEMENTS
=========================*/

const loader = document.querySelector(".loader");

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

const chapters = document.querySelectorAll(".chapter");

const topBtn = document.getElementById("topBtn");

/*=========================
LOADER
=========================*/

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";
loader.style.visibility = "hidden";

}, 1800);

});

/*=========================
BEGIN STORY
=========================*/

function beginStory(){

const firstChapter = document.getElementById("chapter1");

firstChapter.scrollIntoView({

behavior:"smooth"

});

}

/*=========================
MUSIC
=========================*/

let musicPlaying = false;

music.volume = 0.45;

musicBtn.addEventListener("click", () => {

if(!musicPlaying){

music.play();

musicPlaying = true;

musicBtn.innerHTML = "❚❚";

musicBtn.style.background = "#FFD166";

musicBtn.style.color = "#081229";

}else{

music.pause();

musicPlaying = false;

musicBtn.innerHTML = "♫";

musicBtn.style.background = "rgba(255,255,255,.08)";

musicBtn.style.color = "#FFD166";

}

});

/*=========================
AUTO PLAY AFTER FIRST CLICK
=========================*/

document.addEventListener("click", function autoMusic(){

if(!musicPlaying){

music.play();

musicPlaying = true;

musicBtn.innerHTML = "❚❚";

musicBtn.style.background = "#FFD166";

musicBtn.style.color = "#081229";

}

document.removeEventListener("click", autoMusic);

});

/*=========================
SCROLL REVEAL
=========================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}else{

// keep sections visible once shown

entry.target.style.opacity="1";

}

});

},{

threshold:0.05,

rootMargin:"150px 0px"

});

chapters.forEach(section=>{

section.style.opacity="1";

section.style.transform="translateY(40px)";

section.style.transition="1s ease";

observer.observe(section);

});
/*=========================
ACTIVE CHAPTER EFFECT
=========================*/

window.addEventListener("scroll",()=>{

chapters.forEach(section=>{

const top = window.scrollY;

const offset = section.offsetTop - 250;

const height = section.offsetHeight;

if(top >= offset && top < offset + height){

section.style.transform = "translateY(0) scale(1.01)";

section.style.transition = ".8s";

}else{

section.style.transform = "translateY(0) scale(1)";

}

});

});

/*=========================
SCROLL TO TOP BUTTON
=========================*/

window.addEventListener("scroll",()=>{

if(window.scrollY > 600){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=========================
SMOOTH PARALLAX MOON
=========================*/

const moon=document.querySelector(".moon");

window.addEventListener("scroll",()=>{

if(!moon) return;

const value=window.scrollY*0.15;

moon.style.transform=`translateY(${value}px)`;

});
/*==================================
OUR STORY
JAVASCRIPT PART 2
==================================*/

/*=========================
LOVE LETTER
=========================*/

const letter = document.getElementById("loveLetter");
const envelope = document.querySelector(".envelope");

function openLetter(){

    envelope.style.transform = "scale(.9) rotate(-12deg)";
    envelope.style.opacity = ".25";

    setTimeout(()=>{

        envelope.style.display="none";

        letter.style.display="block";

        letter.scrollIntoView({

            behavior:"smooth",
            block:"center"

        });

    },700);

}

/*=========================
PHOTO LIGHTBOX
=========================*/

const photoCards=document.querySelectorAll(".photo-card img");

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const closeLightbox=document.querySelector(".close-lightbox");

photoCards.forEach(photo=>{

    photo.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImage.src=photo.src;

        document.body.style.overflow="hidden";

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

    document.body.style.overflow="auto";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

        document.body.style.overflow="auto";

    }

});

/*=========================
DREAM STAR EFFECT
=========================*/

const dreamStars=document.querySelectorAll(".dream-star");

dreamStars.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 0 40px rgba(255,209,102,.45)";

        card.style.transform="translateY(-12px) scale(1.05)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="";

        card.style.transform="translateY(0) scale(1)";

    });

});

/*=========================
FLOATING GOLD PARTICLES
=========================*/

function createParticle(){

    const particle=document.createElement("div");

    particle.innerHTML="✦";

    particle.style.position="fixed";

    particle.style.left=Math.random()*100+"vw";

    particle.style.top="110vh";

    particle.style.fontSize=(10+Math.random()*18)+"px";

    particle.style.opacity=Math.random();

    particle.style.color="#FFD166";

    particle.style.pointerEvents="none";

    particle.style.zIndex="2";

    particle.style.transition="transform linear, opacity linear";

    document.body.appendChild(particle);

    const duration=7000+Math.random()*5000;

    requestAnimationFrame(()=>{

        particle.style.transform=`translateY(-130vh) translateX(${Math.random()*120-60}px) rotate(${Math.random()*360}deg)`;

        particle.style.opacity="0";

    });

    setTimeout(()=>{

        particle.remove();

    },duration);

}

setInterval(createParticle,650);

/*=========================
TYPEWRITER EFFECT
=========================*/

const quotes=document.querySelectorAll(".quote");

const typingObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const element=entry.target;

            const original=element.dataset.text || element.innerHTML;

            element.dataset.text=original;

            element.innerHTML="";

            let i=0;

            const typing=setInterval(()=>{

                element.innerHTML+=original.charAt(i);

                i++;

                if(i>=original.length){

                    clearInterval(typing);

                }

            },20);

            typingObserver.unobserve(element);

        }

    });

},{
    threshold:.6
});

quotes.forEach(q=>typingObserver.observe(q));

/*=========================
PHOTO HOVER TILT
=========================*/

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

    const cards=document.querySelectorAll(".photo-card");

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateY=((x/rect.width)-0.5)*12;

            const rotateX=((y/rect.height)-0.5)*-12;

            card.style.transform=
            `perspective(900px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

        });

    });

}
/*==================================
OUR STORY
JAVASCRIPT PART 3
==================================*/

/*=========================
RELATIONSHIP TIMER
=========================*/

const startDate = new Date(2023,11,31,0,0,0);

function updateLoveTimer(){

const now = new Date();

let years = now.getFullYear() - startDate.getFullYear();
let months = now.getMonth() - startDate.getMonth();

if(months < 0){

years--;
months += 12;

}

let temp = new Date(
startDate.getFullYear()+years,
startDate.getMonth()+months,
startDate.getDate(),
startDate.getHours(),
startDate.getMinutes(),
startDate.getSeconds()
);

if(temp > now){

months--;

if(months < 0){

years--;
months = 11;

}

temp = new Date(
startDate.getFullYear()+years,
startDate.getMonth()+months,
startDate.getDate(),
startDate.getHours(),
startDate.getMinutes(),
startDate.getSeconds()
);

}

const diff = now - temp;

const days = Math.floor(diff/(1000*60*60*24));

const hours = now.getHours();

const minutes = now.getMinutes();

const seconds = now.getSeconds();

document.getElementById("years").textContent = years;

document.getElementById("months").textContent = months;

document.getElementById("days").textContent = days;

document.getElementById("hours").textContent =
String(hours).padStart(2,"0");

document.getElementById("minutes").textContent =
String(minutes).padStart(2,"0");

document.getElementById("seconds").textContent =
String(seconds).padStart(2,"0");

}

updateLoveTimer();

setInterval(updateLoveTimer,1000);

/*=========================
SHOOTING STARS
=========================*/

function shootingStar(){

const star = document.createElement("div");

star.style.position="fixed";

star.style.top=Math.random()*40+"vh";

star.style.left="-150px";

star.style.width="140px";

star.style.height="2px";

star.style.background="linear-gradient(to right,#FFD166,transparent)";

star.style.transform="rotate(-25deg)";

star.style.boxShadow="0 0 20px #FFD166";

star.style.zIndex="5";

star.style.pointerEvents="none";

document.body.appendChild(star);

let x=-150;

let y=Math.random()*300;

const move=setInterval(()=>{

x+=25;

y+=6;

star.style.left=x+"px";

star.style.top=y+"px";

if(x>window.innerWidth+200){

clearInterval(move);

star.remove();

}

},16);

}

setInterval(shootingStar,9000);

/*=========================
FOREVER SCREEN
=========================*/

function showForever(){

const final=document.getElementById("foreverScreen");

const musicNotice=document.getElementById("musicNotice");

document.body.style.overflow="hidden";

if(musicPlaying){

let fade=setInterval(()=>{

if(music.volume>0.02){

music.volume-=0.02;

}else{

music.pause();

clearInterval(fade);

}

},120);

}

document.body.style.transition="1.5s";

document.body.style.opacity=".15";

setTimeout(()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

final.style.display="block";

document.body.style.opacity="1";

musicNotice.style.display="block";

setTimeout(()=>{

musicNotice.style.display="none";

},5000);

},2200);

}

/*=========================
RESTART STORY
=========================*/

function restartStory(){

location.reload();

}

/*=========================
STAR TWINKLE
=========================*/

const stars=document.querySelectorAll(".star");

stars.forEach(star=>{

setInterval(()=>{

star.style.opacity=Math.random();

star.style.transform=`scale(${0.8+Math.random()*0.8})`;

},1200+Math.random()*1500);

});

/*=========================
KEYBOARD SHORTCUTS
=========================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

lightbox.style.display="none";

document.body.style.overflow="auto";

}

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});

/*=========================
FINAL MESSAGE FADE
=========================*/

const finalMessage=document.querySelector(".final-message");

const finalObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(60px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1800,

fill:"forwards"

});

}

});

},

{

threshold:.4

});

if(finalMessage){

finalObserver.observe(finalMessage);

}
/*=========================
END
=========================*/

console.log("❤️ Our Story Loaded Successfully ❤️");
/*==================================
OUR STORY
JAVASCRIPT PART 4
CINEMATIC FINALE
==================================*/

/*=========================
FLOATING LANTERNS
=========================*/

function createLantern(){

const lantern=document.createElement("div");

lantern.innerHTML="🏮";

lantern.style.position="fixed";

lantern.style.left=Math.random()*100+"vw";

lantern.style.bottom="-80px";

lantern.style.fontSize=(20+Math.random()*20)+"px";

lantern.style.opacity=.8;

lantern.style.pointerEvents="none";

lantern.style.zIndex="4";

document.body.appendChild(lantern);

let y=-80;

const speed=0.4+Math.random()*0.5;

const drift=(Math.random()*2)-1;

function animate(){

y+=speed;

const left=parseFloat(lantern.style.left);

lantern.style.bottom=y+"px";

lantern.style.left=(left+drift*0.3)+"px";

lantern.style.opacity=Math.max(.15,1-y/window.innerHeight);

if(y<window.innerHeight+120){

requestAnimationFrame(animate);

}else{

lantern.remove();

}

}

requestAnimationFrame(animate);

}

// setInterval(createLantern,5000);

/*=========================
HEART CONSTELLATION
=========================*/

function heartConstellation(){

const container=document.querySelector(".constellation");

if(!container) return;

const stars=container.querySelectorAll(".star");

stars.forEach((star,index)=>{

setTimeout(()=>{

star.animate([

{

transform:"scale(0)",

opacity:0

},

{

transform:"scale(2)",

opacity:1

},

{

transform:"scale(1)",

opacity:1

}

],{

duration:1000,

fill:"forwards"

});

},index*180);

});

}


/*=========================
FINAL OBSERVER
=========================*/

const finalChapter=document.querySelector(".final-chapter");

const movieEnding=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

heartConstellation();


movieEnding.unobserve(entry.target);

}

});

},

{

threshold:.55

});

if(finalChapter){

movieEnding.observe(finalChapter);

}

/*=========================
SCROLL PROGRESS
=========================*/

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.left="0";

progress.style.top="0";

progress.style.height="4px";

progress.style.width="0%";

progress.style.background="#FFD166";

progress.style.zIndex="9999";

progress.style.boxShadow="0 0 15px #FFD166";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=window.scrollY;

progress.style.width=(current/total)*100+"%";

});

/*=========================
MOON GLOW
=========================*/

const moonGlow=document.querySelector(".moon");

setInterval(()=>{

if(!moonGlow) return;

moonGlow.animate([

{

boxShadow:"0 0 25px #FFF6D5"

},

{

boxShadow:"0 0 60px #FFD166"

},

{

boxShadow:"0 0 25px #FFF6D5"

}

],{

duration:4000

});

},4000);

/*=========================
PAGE TITLE
=========================*/

const titles=[

"Our Story ❤️",

"Jane ❤️ Maina",

"Forever Begins Here",

"I'll Always Choose You"

];

let titleIndex=0;

setInterval(()=>{

document.title=titles[titleIndex];

titleIndex++;

if(titleIndex>=titles.length){

titleIndex=0;

}

},3000);

/*=========================
COPYRIGHT YEAR
=========================*/

console.log(

`❤️
Our Story
Created with love by Jane
${new Date().getFullYear()}
❤️`

);

/*=========================
THE END
=========================*/
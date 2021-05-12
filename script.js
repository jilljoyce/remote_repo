
//hamburger menu
const navImage = document.querySelector(".nav__image");  //.getElementsByClassName("nav__image")  did not work! it returns a collection
const nav = document.querySelector("nav");

const displayMenu = function() {
    ul.classList.toggle("display-none");
    ul.classList.add("transition"); //transition effect doesnt work
};

navImage.addEventListener("mouseover", displayMenu)
//navImage.addEventListener("mouseout", displayMenu)  ---- not the right way...


//background styling with menu
const ul = document.querySelector(".nav__ul");
const liHome = document.querySelector(".nav__li-home");
const liRed = document.querySelector(".nav__li-red");
const liOrange = document.querySelector(".nav__li-orange");
const liPurple = document.querySelector(".nav__li-purple");
const liGreen = document.querySelector(".nav__li-green");

const linkHome = function() {
        document.body.className = "home-background";   //className needs "document" to start with
        document.querySelector("h1").innerHTML = "White";  //document.h1.innerHTML = "White";  did not work, also not when h1 was declared first
        ul.classList.toggle("display-none");
};

const linkOrange = function(){
    document.body.className = "orange-background";
    document.querySelector("h1").innerHTML = "Orange";
    ul.classList.toggle("display-none");
};

const linkRed = function() {
    document.body.className = "red-background";
    document.querySelector("h1").innerHTML = "Red";
    ul.classList.toggle("display-none");
};

const linkPurple = function() {
    document.body.className = "purple-background";
    document.querySelector("h1").innerHTML = "Purple";
    ul.classList.toggle("display-none");
};

const linkGreen = function() {
    document.body.className = "green-background";
    document.querySelector("h1").innerHTML = "Green";
    ul.classList.toggle("display-none");
};

liHome.addEventListener("click", linkHome)
liOrange.addEventListener("click", linkOrange)
liRed.addEventListener("click", linkRed);
liPurple.addEventListener("click", linkPurple);
liGreen.addEventListener("click", linkGreen);

//key event
document.addEventListener("keydown", function(event){
    if (event.key === "1") {
        displayMenu();
        linkHome();
    }
    else if (event.key === "2") {
        displayMenu();
        linkRed();
    }
    else if (event.key === "3") {
        displayMenu();
        linkOrange();
    }
    else if (event.key === "4") {
        displayMenu();
        linkPurple();
    }
    else if (event.key === "5") {
        displayMenu();
        linkGreen();
    }
});

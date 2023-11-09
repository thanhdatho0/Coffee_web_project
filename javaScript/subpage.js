function plus() {
    if (Number(document.getElementById('vd1').textContent) >= 1) {
        document.getElementById('vd1').innerHTML++;
    }
}

function minus() {
    if (Number(document.getElementById('vd1').textContent) > 1) {
        document.getElementById('vd1').innerHTML--;
    }
}

window.onscroll = function () { scrollFunction(), addBoxShadow(), sticky() };

// Sticky form

let scrollTop = window.scrollY;
let stick_content = document.getElementById("fixed-form");
let stick_wrapper = document.getElementsByClassName("sticky-form")[0].getBoundingClientRect().height;
let stick_contentTop = document.getElementById("fixed-form").getBoundingClientRect().top + scrollTop;
let stick_contentHeight = document.getElementById("fixed-form").getBoundingClientRect().height;



function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.padding = "20px 40px";
    }
    else {
        document.getElementById("header").style.padding = "45px 40px";
    }
}

function addBoxShadow() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").style.boxShadow = "1px 1px 5px #ccc"
    }
    else {
        document.getElementById("header").style.boxShadow = "none";
    }
}

function sticky(){
    if (stick_contentTop < stick_wrapper - stick_contentHeight) {
        stick_content.style.position = "fixed";
    }
}
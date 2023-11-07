// Change header height when scroll start
window.onscroll = function(){scrollFunction(), addBoxShadow()};

function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("header").style.padding = "20px 40px";
    }
    else{
        document.getElementById("header").style.padding = "45px 40px";
    }
}

function addBoxShadow(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.getElementById("header").style.boxShadow = "1px 1px 5px #ccc"
    }
    else{
        document.getElementById("header").style.boxShadow = "none";
    }
}
// Change header height when scroll end
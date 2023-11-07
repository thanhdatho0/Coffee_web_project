// Change header height when scroll start
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("header").style.padding = "20px 40px";
    }
    else{
        document.getElementById("header").style.padding = "45px 40px";
    }
}
// Change header height when scroll end
// Change header height when scroll start
window.onscroll = function(){scrollFunction(), addBoxShadow(),fixed_content()};

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

// Auto slide navigation function start
var count = 1;
setInterval(function(){
    document.getElementById('radio' + count).checked = true;
    count++;
    if(count > 3){
        count = 1;
    }
}, 4000);
// Auto slide navigation function end


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


function fixed_content(){
    var limit = document.getElementById("sticky-form").getBoundingClientRect().height;
    var content_height = document.getElementById("fixed-form").getBoundingClientRect().height;
    var scrollTop = document.documentElement.scrollTop;

    if(scrollTop <= limit - (content_height - 30)){
        if(scrollTop > 50){
            document.getElementById("fixed-form").style.transform = `translateY(-${30}px)`;
        }
        else{
            document.getElementById("fixed-form").style.transform = "";
        }
        document.getElementById("fixed-form").style.position = "fixed";
        document.getElementById("fixed-form").style.bottom = "";
    }
    else{
        document.getElementById("fixed-form").style.position = "absolute";
        document.getElementById("fixed-form").style.bottom = "-30px";
    }
}
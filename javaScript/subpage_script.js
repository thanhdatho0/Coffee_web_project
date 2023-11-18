// Change header height when scroll start
window.onscroll = function () { scrollFunction(), addBoxShadow()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header-transparent").style.padding = "20px 40px";
        document.getElementById("header-transparent").style.backgroundColor = "#fff";
        document.getElementsByClassName("border-white")[0].style.color = "#000";
        for(var i = 0; i < 8; i++){
            document.getElementsByClassName("white")[i].style.color = "#000";
        }
        document.getElementsByClassName("border-white")[0].style.borderBottom = "1px solid #000"
    }
    else {
        document.getElementById("header-transparent").style.padding = "45px 40px";
        document.getElementById("header-transparent").style.backgroundColor = "transparent";
        document.getElementsByClassName("border-white")[0].style.color = "#fff";
        for(var i = 0; i < 8; i++){
            document.getElementsByClassName("white")[i].style.color = "#fff";
        }
        document.getElementsByClassName("border-white")[0].style.borderBottom = "1px solid #fff"
    }
}

function addBoxShadow() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header-transparent").style.boxShadow = "1px 1px 5px #ccc"
    }
    else {
        document.getElementById("header-transparent").style.boxShadow = "none";
    }
}
// Change header height when scroll end


function close_login_form(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("Log-in-form").style.right = "-450px";
}

function close_sideBar(){
    document.getElementById("navigation").style.left = "-345px";
}

$(document).ready(function () {
    // Open - Close Side Bar
    $(".menu__button").mouseenter(function () {
        $.get("Left_sideBar.html", function (data) {
            $("#navigation").html(data);
        })
        $("#navigation").css("left", "0");
        $("#navigation").mouseleave(function () {
            $("#navigation").css("left", "-345px");
        })
    })
    // END

    // Open - Close Login Form
    $(".account-access").click(function () {
        $.get("Login_form.html", function (data, status) {
            $("#Log-in-form").html(data);
        })
        $("#overlay").css("display", "block");
        $("#Log-in-form").css("right", "0");
        $("#overlay").click(function () {
            $("#overlay").css("display", "none");
            $("#Log-in-form").css("right", "-450px");
        })
    });
    // END
});


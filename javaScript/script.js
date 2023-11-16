// Change header height when scroll start
window.onscroll = function () { scrollFunction(), addBoxShadow(), fixed_content()};

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
// Change header height when scroll end

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


function fixed_content() {
    var limit = document.getElementById("sticky-form").getBoundingClientRect().height;
    var content_height = document.getElementById("fixed-form").getBoundingClientRect().height;
    var scrollTop = document.documentElement.scrollTop;

    if (scrollTop <= limit - (content_height - 30)) {
        if (scrollTop > 50) {
            document.getElementById("fixed-form").style.transform = `translateY(-${30}px)`;
        }
        else {
            document.getElementById("fixed-form").style.transform = "";
        }
        document.getElementById("fixed-form").style.position = "fixed";
        document.getElementById("fixed-form").style.bottom = "";
    }
    else {
        document.getElementById("fixed-form").style.position = "absolute";
        document.getElementById("fixed-form").style.bottom = "-30px";
    }
}

function close_login_form(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("Log-in-form").style.right = "-450px";
}

function close_sideBar(){
    document.getElementById("navigation").style.left = "-350px";
}

$(document).ready(function () {
    // Open - Close Side Bar
    $(".menu__button").mouseenter(function () {
        $.get("Left_sideBar.html", function (data) {
            $("#navigation").html(data);
        })
        $("#navigation").css("left", "0");
        $("#navigation").mouseleave(function () {
            $("#navigation").css("left", "-350px");
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


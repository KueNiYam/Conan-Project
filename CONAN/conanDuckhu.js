/**
 * Created by eunsoo on 2017-05-11.
 */
function checkEmail() {

    var checkEmail = document.getElementById("email").value;
    var email = document.getElementById("email");
    var check = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    if (checkEmail.length === 0) {
        alert("please enter your email");
        email.classList.remove('.login');
        email.classList.add('ErrorBorder');
    } else if (check.test(checkEmail) === false) {

        alert(checkEmail + " is not email." + " Please check your email");
        email.classList.remove('.login');
        email.classList.add('ErrorBorder');
    } else {
        email.classList.remove('ErrorBorder');
        email.classList.add('.login');
    }
}
function checkPassword() {
    var checkPassword = document.getElementById("password").value;
    var password = document.getElementById("password");

    if (checkPassword.length === 0) {
        password.classList.remove('login');
        password.classList.add('ErrorBorder');
    } else {
        password.classList.remove('ErrorBorder');
        password.classList.add('login');
    }
}

function activeNav(nav) {
    var activeNav = document.getElementById(nav).value;
}
function initiate() {
    var elem = document.getElementById('canvas');
    var canvas = elem.getContext('2d');
    var conan = elem.getContext('2d');
    canvas.shadowColor = "rgba(0, 0, 0, 1)";
    canvas.shadowOffsetX = 6;
    canvas.shadowOffsetY = 6;
    canvas.shadowBlur = 5;

    canvas.fillStyle = "#FFE400";
    canvas.strokeStyle = "#FFFFFF";
    canvas.font = "bold 45px 'Trebuchet MS', Sans-serif";
    canvas.strokeText("detective ", 205, 50);
    canvas.fillText("detective ", 205, 50);


    var grad = canvas.createLinearGradient(4, 0, 10, 110);
    grad.addColorStop(0.8, '#FF0000');
    grad.addColorStop(1, '#000000');
    canvas.fillStyle = grad;

    conan.strokeStyle = "#FFFFFF";
    conan.font = "bold 120px 'Trebuchet MS', Sans-serif";
    conan.strokeText("conan", 80, 125);
    conan.fillText("conan", 80, 125);
    canvas.shadowColor = "rgba(0, 0, 0, 0)";
    conan.strokeText("conan", 80, 125);

}
addEventListener("load", initiate);

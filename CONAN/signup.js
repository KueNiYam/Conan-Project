/**
 * Created by eunsoo on 2016-08-16.
 */
function checkId() {
    var id_input = document.getElementById("id");
    var Error = document.getElementById("Error1");
    if (id_input.value === "") {
        Error.style.display = "block";
    } else {
        Error.style.display = "none";
    }
}
function checkPassword() {
    var password_input = document.getElementById("password");
    var Error = document.getElementById("Error2");
    if (password_input.value === "") {
        Error.style.display = "block";
    } else {
        Error.style.display = "none";
    }
}
function checkPassword2() {
    var password_input = document.getElementById("password2");
    var Error = document.getElementById("Error3");
    if (password_input.value === "") {
        Error.style.display = "block";
    } else {
        Error.style.display = "none";
    }
}
function checkName() {
    var password_input = document.getElementById("name");
    var Error = document.getElementById("Error4");
    if (password_input.value === "") {
        Error.style.display = "block";
    } else {
        Error.style.display = "none";
    }
}
function checkGender() {
    var select_man = document.getElementById("man");
    var select_woman = document.getElementById("woman");
    var Error = document.getElementById("Error5");
    if (select_woman !== "clicked" && select_man !== "clicked") {
        Error.style.display = "block";
    } else {
        Error.style.display = "none";
    }
}
function checkYear() {
    var year_input = document.getElementById("year");
    var Error0 = document.getElementById("Error6");
    var Error1 = document.getElementById("Error7");
    var Error2 = document.getElementById("Error8");
    if (year_input.value === "") {
        Error0.style.display = "block";
        Error1.style.display = "none";
        Error2.style.display = "none";
    } else {
        Error0.style.display = "none";
    }
}
function checkMonth() {
    var Month_input = document.getElementById("month");
    var mon = Month_input.options[Month_input.selectedIndex].value;
    var Error0 = document.getElementById("Error6");
    var Error1 = document.getElementById("Error7");
    var Error2 = document.getElementById("Error8");
    if (mon === "" && Error0.style.display === "none") {
        Error1.style.display = "block";
        Error2.style.display = "none";
    } else {
        Error1.style.display = "none";
    }
}
function checkDay() {
    var day_input = document.getElementById("day");
    var Error0 = document.getElementById("Error6");
    var Error1 = document.getElementById("Error7");
    var Error2 = document.getElementById("Error8");
    if (day_input.value === "" && Error0.style.display === "none" && Error1.style.display === "none") {
        Error2.style.display = "block";
    } else {
        Error2.style.display = "none";
    }
}
function checkEmail() {
    var email_input = document.getElementById("email");
    var Error = document.getElementById("Error9");
    if (email_input.value === "") {
        Error.style.display = "block";
    } else {
        Error.style.display = "none";
    }
}
function checkPhone_num() {
    var phone_num_input = document.getElementById("cell_phone_num");
    var Error = document.getElementById("Error10");
    if (phone_num_input.value === "") {
        Error.style.display = "block";
    } else {
        Error.style.display = "none";
    }
}
function checkNum() {
    var check_num_input = document.getElementById("check_num");
    var Error = document.getElementById("Error11");
    if (check_num_input.value === "") {
        Error.style.display = "block";
    } else {
        Error.style.display = "none";
    }
}
function checkInteger(id) {
    var checkId = document.getElementById(id).value;
    var regex = /^(0|-?[1-9][0-9]*)$/g;
    if (regex.test(checkId) === false) {
        alert("please enter Integer!");
    }
}


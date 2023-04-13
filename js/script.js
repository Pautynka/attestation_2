"use strict"
let email,password,emailError, passwordError,changeL, changeR;
changeL = document.getElementById("index_form_login");
changeR = document.getElementById("index_form_register");

function getDataReg(form) {
    let formData = new FormData(form);
    emailError = document.querySelector('#email + span.error');
    passwordError = document.querySelector('#password + span.error');
    email = Object.fromEntries(formData).email;
    password = Object.fromEntries(formData).password;
}
function validInputReg () {
    let rev = /\S+@\S+\.\S+/;
    if (email == null || email == '') {
        emailError.style.display = "inline";
        emailError.textContent = "Поле не заполнено!";
        return false;
    } else if (!rev.test(email)) {
        emailError.style.display = "inline";
        emailError.textContent = "Пожалуйста введите корректный email";
        return false;
    } else {
        emailError.style.display = "none";
    }

    if (password == null || password == '') {
        passwordError.style.display = "inline";
        passwordError.textContent = "Поле не заполнено!";
        return false;
    } else {
        passwordError.style.display = "none";
    }
    saveData(email,password);
    return true;
}
function saveData() {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
}
function changeForm() {
if (changeR.style.display == 'block')
    {
        changeL.style.display = "block";
        changeR.style.display = "none";
    }

}

function getDataLog(form) {
    let formData = new FormData(form);
    emailError = document.querySelector('#emailL + span.error');
    passwordError = document.querySelector('#passwordL + span.error');
    email = Object.fromEntries(formData).email;
    password = Object.fromEntries(formData).password;
}
function validInputLog () {
    let rev = /\S+@\S+\.\S+/;
    if (email == null || email == '') {
        emailError.style.display = "inline";
        emailError.textContent = "Поле обязательно для заполнения!";
        return false;
    } else if (!rev.test(email)) {
        emailError.style.display = "inline";
        emailError.textContent = "email не валидный";
        return false;
    } else {
        emailError.style.display = "none";
    }

    if (password == null || password == '') {
        passwordError.style.display = "inline";
        passwordError.textContent = "Поле обязательно для заполнения!";
        return false;
    } else {
        passwordError.style.display = "none";
    }
    login(email,password);
    return true;
}
function login() {
     let truemail = localStorage.getItem("email");
    let trupassword = localStorage.getItem("password");

    if (email === truemail && password === trupassword) {
        window.location.href = 'success.html';
    } else {
        alert("Логин или пароль не верны!");
    }
};


document.getElementById("index_form_register").addEventListener("submit", function (e) {
    e.preventDefault();
    getDataReg(e.target);
    validInputReg ();
});
document.getElementById("index_form_login").addEventListener("submit", function (e) {
    e.preventDefault();
    getDataLog(e.target);
    validInputLog ();
});

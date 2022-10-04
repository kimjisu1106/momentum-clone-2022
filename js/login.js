const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const APPEAR_CLASSNAME = "appear";
const DISAPPEAR_CLASSNAME = "disappear";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);
const logoutBtn = document.querySelector("#logout-btn");

function appearGreetings(username){
    greeting.classList.add(APPEAR_CLASSNAME);
    setTimeout(function() {
        greeting.classList.remove(HIDDEN_CLASSNAME);
    },1000);
    greeting.innerText = `반가워요, ${username}.`;
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

function disappearGreetings(){
    greeting.classList.add(DISAPPEAR_CLASSNAME);
    setTimeout(function() {
        greeting.classList.add(HIDDEN_CLASSNAME);
    },1000);
}

function onLoginSubmit(event) {
    event.preventDefault();
    const inputUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, inputUsername);
    loginForm.classList.add(DISAPPEAR_CLASSNAME);
    setTimeout(function() {
        loginForm.classList.add(HIDDEN_CLASSNAME);
    }, 1000);
    appearGreetings(inputUsername);
}

function appearLoginForm() {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

function disappearLoginForm(){
    loginForm.classList.add(DISAPPEAR_CLASSNAME);
    setTimeout(function() {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    },1000);
}

if (savedUsername === null) {
    appearLoginForm();
} else {
    appearGreetings(savedUsername);
}

function onLogout() {
    disappearGreetings(savedUsername);
    localStorage.removeItem(USERNAME_KEY);
    setTimeout(function() {
        appearLoginForm();
    }, 1000);   
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
}

logoutBtn.addEventListener("click",onLogout);
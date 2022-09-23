const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const greeting = document.querySelector("#greeting");
const greetingButton = document.querySelector("#greeting-button");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function paintGreeting(userName) {
    greeting.innerText = `Hello ${userName}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greetingButton.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);

    paintGreeting(userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUserName);
}

function onGreetingButton(event) {
    greeting.classList.add(HIDDEN_CLASSNAME);
    greetingButton.classList.add(HIDDEN_CLASSNAME);

    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

greetingButton.addEventListener("click", onGreetingButton);

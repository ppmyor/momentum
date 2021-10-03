const loginForm = document.querySelector("#login-form");
const inputID = loginForm.querySelector("#user-ID");
const submitButton = loginForm.querySelector("#submit-btn");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function loginSubmit(event)  {
    event.preventDefault();
    const username = inputID.value;
    console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
}

loginForm.addEventListener("submit", loginSubmit);


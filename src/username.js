const userName = document.querySelector("#user-ID");
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

userName.innerText = `${savedUsername}`;
const clock = document.querySelector("#clock");

function getClock() {
    const now = new Date();
    const Hours = String(now.getHours()).padStart(2, "0");
    const Minutes = String(now.getMinutes()).padStart(2, "0");

    clock.innerText = `${Hours}:${Minutes}`;
}

getClock()
setInterval(getClock, 1000);
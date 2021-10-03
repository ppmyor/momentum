const showDDay = document.querySelector("#d-day span");

function dDayClock()    {
    const today = new Date();
    const birthday = new Date("1997-04-20");
    const calculate = birthday - today;
    const days = Math.floor(calculate / 1000 / 60 / 60 / 24);
    const plusDays = days * -1;
    showDDay.innerText = `${String(plusDays).padStart(2,"0")}day`;
}

dDayClock();
setInterval(dDayClock, 60000);

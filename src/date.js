const month = document.querySelector("#month");
const date = document.querySelector("#date");

function getDate() {
    const now = new Date();
    const currentMonth = String(now.getMonth()+1).padStart(2, "0");
    const currentDate = String(now.getDate()).padStart(2, "0");

    month.innerText = `${currentMonth}.`;
    date.innerText = `${currentDate}`;
}

getDate()
setInterval(getClock, 60000);
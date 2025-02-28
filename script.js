function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Jakarta",
  };
  const formattedTime = new Intl.DateTimeFormat("id-ID", options).format(now);

  clock.textContent = formattedTime;

  const seconds = now.getSeconds();
  clock.style.borderColor = seconds % 2 === 0 ? "red" : "blue";
}

setInterval(updateClock, 1000);

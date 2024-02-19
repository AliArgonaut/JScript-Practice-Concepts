function gettime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  now.getHours() > 12 ? hours % 12 : hours + 0;
  const displayed = `${hours}:${minutes}:${seconds}`;
  document.getElementById("outPut").textContent = displayed;
}

gettime();
setInterval(gettime, 1000);

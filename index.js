const preferredTheme = localStorage.getItem("preferred-theme");
    if (preferredTheme === "dark") {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
    }

var t = document.getElementById("theme");
t.innerText = preferredTheme;

var h1= document.getElementById("time");
(function loop() {
    var date = new Date();
    h1.innerText=date.getHours() + ":" +
        date.getMinutes() + ":" + date.getSeconds();
    setTimeout(loop, 1000);
})();




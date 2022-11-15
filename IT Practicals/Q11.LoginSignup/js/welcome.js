window.onload = function (params) {
    console.log("we r in dashboard now");
    const token = localStorage.getItem("userPhone");
    if (token == undefined || token == null) {
            window.location.replace("./login.html");
            return;
    }
    const phoneNumber = localStorage.getItem("userPhone");
    const userName = localStorage.getItem("userName");

    document.getElementById("h1").innerText = `Welcome, ${userName}`;
}
document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const userName = document.getElementById("name").value.trim();
    const phoneNumber = document.getElementById("userph").value.trim();
    const password = document.getElementById("pass").value.trim();
    const cpassword = document.getElementById("confirmPass").value.trim();
    if (password !== cpassword) {
            alert("passwd and cpasswrd isn't same");
            return;
    }

    const obj = {
            userName,
            phoneNumber,
            password
    }
    // console.log(obj);
    const options = {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
    };
    fetch("http://localhost:5000/api/add/user", options)
            .then((response) => {
                    return response.json();
            })
            .then((response) => {
                    console.log(response);
                    window.location.href = "./login.html";
            })
            .catch((error) => {
                    console.log("problem in frontend");
            })
});
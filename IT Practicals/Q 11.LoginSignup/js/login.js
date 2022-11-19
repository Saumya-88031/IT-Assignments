document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("click");
    const phoneNumber = document.getElementById("userph").value.trim();
    const password = document.getElementById("pass").value.trim();
    const obj = {
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
    fetch("http://localhost:5000/api/login", options)
            .then((response) => {
                    return response.json();
            })
            .then((response) => {
                    console.log(response);
                    if (response.length == 0) {
                            alert("userName or password is invalid!!");
                            return;
                    }
                    else {
                            localStorage.setItem("userPhone", response[0].phoneNumber);
                            localStorage.setItem("userName", response[0].userName);
                            // window.location.href = "./dashboard.html";
                            window.location.replace("./welcome.html");
                    }

            })
            .catch((error) => {
                    console.log("problem in frontend");
            })


})
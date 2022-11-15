const http = require("http");

const {
        addUser,
        checkUser,
        getUsers
} = require("./controller/userController");

const server = http.createServer((request, res) => {
        console.log(request.url);
        console.log(request.method);
        console.log(request.headers);
        if (request.url === "/api/add/user" && request.method === "POST") {
                addUser(request, res);
        } else if (request.url === "/api/login" && request.method === "POST") {
                checkUser(request, res);
        }
        else {
                getUsers(request, res);
                console.log("HIT 3");
        }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
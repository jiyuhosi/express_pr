const { response } = require("express");
const express = require("express");
const { request } = require("http");

const app = express();

const users = ["Tom", "Andy", "Jessica", "Paul", "Pau1"]; // const

app.get("/", (request, response) => {
    response.end("<h1>welcome</h1>");
});

app.get("/users", (request, response) => {
    response.end(`<h1>${users}</h1>`);
});

app.get("/users/:id", (request, response) => {
    const userName = users[request.params.id - 1];
    response.end(`<h1>${userName}</h1>`);
});

app.get("*", (request, response) => {
    response.end("<h1>no page</h1>");
});

app.listen(3000);

// const server = http.createServer((request, response) => {
//     // Arrow Function, const
//     if (request.url === "/") {
//         response.end("<h1>Welcome!</h1>");
//     } else if (request.url === "/users") {
//         response.end(`<h1>${users}/h1>`); // Template String
//     } else if (request.url.split("/")[1] === "users") {
//         console.log(request.url.split("/")[1]);
//         //url : /users/1, /users/2, ..
//         const userIdx = request.url.split("/")[2]; // const
//         console.log(userIdx);
//         const userName = users[userIdx - 1]; // const
//         console.log(userName);

//         response.end(`<h1>${userName}</h1>`); // Template String
//     } else {
//         response.end("<h1>Page Not Available</h1>");
//     }
// });

// server.listen(3000);

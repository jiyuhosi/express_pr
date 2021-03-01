const { response } = require("express");
const http = require("http");

const users = ["tom1", "tom2", "tom3"];

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.end("<h1>welcome</h1>");
    } else if (request.url === "/users") {
        response.end(`<h1>${users}</h1>`);
    } else if (request.url.split("/")[1] === "users") {
        const userIdx = request.url.split("/")[2];

        const userName = users[userIdx - 1];

        response.end(`<h1>${userName}</h1>`);
    } else {
        response.end("<h1>page not available</h1>");
    }
});

server.listen(3000);

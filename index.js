const http = require("http");

const fs = require("fs");

const PORT = 2000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((request, response, next) => {
  if (request.url === "/") {
    return response.end(home);
  }
  if (request.url === "/about") {
    return response.end("<h1> ABOUT</h1>");
  }
  if (request.url === "/contact") {
    return response.end("<h1> CONTACT</h1>");
  }
  if (request.url === "/service") {
    return response.end("<h1> SERVICE</h1>");
  } else {
    return response.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(PORT, hostname, () => {
  console.log("Server is working on http://${hostname}:${PORT}");
});

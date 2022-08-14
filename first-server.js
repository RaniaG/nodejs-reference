const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write("<html>");
    res.write("<body><h1> default response </h1></body>");
  } else if (req.url.includes("answer") && req.method === "POST") {
    req.on("data", (chunk) => {
        fs.writeFileSync("./message", chunk);
      });
    res.setHeader("Location", "/");
    res.writeHead(302);
    res.write("<html>");

  } else {
    res.write("<html>");
    res.write(
      `<body><form method="POST" action="/answer"><input type="text" name="answer"/> <button type="submit"> submit</button> </form></body>`
    );
  }
  res.write("</html>");
  res.end();
});

server.listen("3000");

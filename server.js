const http = require("http");
const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end(`Hello ${req.url}`);
});

server.listen(port, hostName, () =>
  console.log(`This server is listening @http:// ${hostName} and ${port}`)
);

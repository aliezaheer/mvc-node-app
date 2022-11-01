const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  //   process.exit(); //This line of code stops the server by stoping loop of listner

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Node Js Page</title></head>");
  res.write("<body><h1>My Node Js Server, Build by Ali Zaheer.</h1></body>");
  res.write("</html>");
});

server.listen(3000);

const http = require("http"); // for start any server

const server = http.createServer(function (req, res) {
//   console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body>");
  res.write("<head> Hello my name is shainti </head>");
  res.write("<h1> Hello my name is shainti </h1>");
  res.write("</body>");
  res.write("</html>");
  res.end(); // for send the response to sever
});
const PORT = 3000;
server.listen(PORT, () => {
  // listen the server
  console.log(`Server start Successfully on http://localhost:${PORT}`);
});

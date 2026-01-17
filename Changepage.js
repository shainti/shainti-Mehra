const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.setHeader("Content-type", "text/Html");
    res.write("<html>");
    res.write("<body>");
    res.write("<head> Hello my name is shainti </head>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/Bunty") {
    res.write("<html>");
    res.write("<body>");
    res.write("<head> Hello my name is bunty </head>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }
  else{
  res.write("<html>");
    res.write("<body>");
    res.write("<head> Hello my name is Tanu </head>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }
});
const PORT = 4002;
server.listen(PORT, () => {
  console.log(`Server is started at http://localhost:${PORT}`);
});

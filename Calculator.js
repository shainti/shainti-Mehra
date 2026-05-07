const Calculator = (req, res) => {

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body>");
    res.write("Welcome to Home page");
    res.write('<form action="/Calculator" method="POST">');
    res.write('<input type="submit" value="Click Here for calculate"/>');
    res.write("</form>");
    res.write("</body></html>");
    return res.end();
    //github changes are reflected 

  } if (req.url === "/Calculator" && req.method === "POST") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body>");
    res.write('<form action="/Calculate-result" method="POST">');
    res.write(
      '<input type="text" name="First-value" placeholder="Enter First value"/>'
    );
    res.write(
      '<input type="text" name="Second-value" placeholder="Enter second value"/>'
    );
    res.write("<br></br>");
    res.write('<input type="submit" value="calculate"/>');
    res.write("</form>");
    res.write("</body></html>");
    return res.end();
    
  } if (req.url === "/Calculate-result" && req.method === "POST") {
    const body = [];
    req.on('data',chunk=>{
        body.push(chunk);
    })
    req.on('end',()=>{
        const enddata = Buffer.concat(body).toString();
        console.log(enddata);

        const fulldata = new URLSearchParams(enddata);
        console.log(fulldata);

        const allfulldata = Object.fromEntries(fulldata);
        console.log(allfulldata);
        const first = Number(fulldata.get('First-value'));
        const second = Number(fulldata.get('Second-value'));
        const sum = first + second;
        //new changes reflected

    res.setHeader("Content-Type", "text/html");  
    res.write("<html><body>");
    res.write("Here are the result");
    res.write("<br></br>");
    res.write(`the sum of a and b is =${sum}`);
    res.write("</body></html>");
     res.end();
    });
    return;
  }
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body>");
    res.write("Welcome to shainti store");
    res.write("</body></html>");
    res.end();
};

module.exports = Calculator;

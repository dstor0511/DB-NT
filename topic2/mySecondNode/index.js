var http = require("http");
var dt = require("./time.js");

http.createServer(function (req, res) {
    // Write head should always come first as it includes the headers
    res.writeHead(200, { "Content-Type": "text/plain" });

    res.write("The date and time are currently: " + dt.myDateTime() + "\n");
    res.end("Hello World!");
}).listen(8082, function () {
    console.log("Node server is running...");
});

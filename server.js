const express = require("express");
const app = express();
const server = app.listen(8000);
const socket = require("socket.io")(server);

app.use(express.static(__dirname));
app.set("views",__dirname+"/views");
app.set("view engine","ejs");

app.get("/",function(req, res) {
    
})
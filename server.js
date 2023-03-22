const express = require("express");
const app = express();
const server = app.listen(8000);
const io = require("socket.io")(server);
var donate = 0;

app.use(express.static(__dirname));
app.set("views",__dirname+"/views");
app.set("view engine","ejs");
-
app.get("/",function(req, res) {
    res.render("index", {donate});
})
io.on("connection",function(socket) {
    socket.on("update_donate",function(data) {
        console.log(donate);
        updateDonate(data.trigger);
        io.emit("show_donate", donate);
    })
})
function updateDonate(process) {
    if(process === "increase") {
        return donate += 10;
    }
    if(donate > 0) {
        return donate -= 10;
    }
}
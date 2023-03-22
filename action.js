$(document).ready(function() {
    const socket = io();
    $(document).on("click","button",function(e) {
        e.stopPropagation();
        e.preventDefault();
        socket.emit("update_donate", {trigger: $(this).attr("id")});
        return false;
    })
    socket.on("show_donate",function(data) {
        $("#amount").text(data)
    })
})
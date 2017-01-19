var socket = io();

$('#send-message-btn').click(function () {
    var msg = $('#message-box').val();
    socket.emit('chat', msg);
    $('#messages').append($('<p>').text(msg));
    $('#message-box').val('');
    return false;
});
socket.on('chat', function (msg) {
    var p = $("[id^=pid]").toArray();
   $("[id^=pid]").each(function () {
        //alert(this.text);
        //$(this).text("changed text");
       if ($(this).text() == "Some text..") {
            //alert(this.text);
            $(this).text("changed text");
            return false;
        }
    });
        
});
 
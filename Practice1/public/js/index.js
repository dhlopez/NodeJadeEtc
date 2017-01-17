var socket = io();

$('#send-message-btn').click(function () {
    var msg = $('#message-box').val();
    socket.emit('chat', msg);
    $('#messages').append($('<p>').text(msg));
    $('#message-box').val('');
    return false;
});
socket.on('chat', function (msg) {
    $('.customText').each(function () {
        alert($('.customText').text());
        if ($('.customText').text() == "Some text..") {
            
            $('.customText').text(msg);
        }
    });
        
});
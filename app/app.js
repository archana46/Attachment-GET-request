$(document).ready( function() {
    app.initialized()
        .then(function(_client) {
          var client = _client;
          client.events.on('app.activated',
            function() {
                client.data.get('ticket')
                    .then(function(data) {
                        console.log('data',data);
                        var attachmentName = data.ticket.attachments[0].name;
                        var attachmentUrl = data.ticket.attachments[0].attachment_url;
                        var clickable = '<a href='+attachmentUrl+'target="_blank">'+attachmentName+'</a>'
                        console.log('name and attachment_url', attachmentName, attachmentUrl);
                        $('#apptext').append(clickable);
                    })
                    .catch(function(e) {
                        console.log('Exception - ', e);
                    });
        });
    });
});

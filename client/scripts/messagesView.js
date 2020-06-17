var MessagesView = {

  $chats: $('#chats'),
  $refresh: $('.refresh'),

  initialize: function() {
    MessagesView.$refresh.on('click', MessagesView.refresh);
  },

  render: function(results) {

    results.forEach(messageObj => {
      if (/^%20/g.test(messageObj.username)) {
        messageObj.username = 'Anonymous';
      }
      if (messageObj.username === undefined) {
        messageObj.username = 'Anonymous';
      }
      if (/%20/.test(messageObj.username)) {
        messageObj.username = messageObj.username.replace(/[%20]/g, ' ');
      }
      if (messageObj.text === '' || messageObj.text === undefined) {
        messageObj.text = Messages.text;
      }
      MessagesView.renderMessage(messageObj);

    });
  },

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message)); // ({key: val})
  },

  refresh: function(event) {
    MessagesView.$chats.empty();
    App.fetch();
  }
};
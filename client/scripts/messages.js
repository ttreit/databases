var Messages = {
  username: window.location.search.substr(10) || 'Anonymous',
  text: 'You forgot to enter a message ding dong!',
  roomname: $('#roomname option:selected').text()
};
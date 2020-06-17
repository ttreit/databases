var Rooms = {
  userRoom: '',
  add: function() {
    Rooms.userRoom = prompt('Please enter a new room');
    if (Rooms.userRoom === '' || Rooms.userRoom === null) {
      $('#rooms select option[value = null]').remove();
    } else if (RoomsView.allRooms.indexOf(Rooms.userRoom) >= 0) {
      prompt('That room already exists, please enter a new room name');
    } else {
      RoomsView.$select.prepend(`<option selected>${Rooms.userRoom}</option>`);
      Messages.roomname = Rooms.userRoom;
      MessagesView.$chats.empty();
      Parse.create(Messages);
      App.fetchRoom();
    }
  },

  render: function(room) {

    RoomsView.$select.append(`<option>${room}</option>`);
  },

  addUserRoom: function(results) {
    results.forEach(function(matchRoom) {
      if (matchRoom.roomname === Rooms.userRoom && matchRoom.roomname !== 'All Channels') {
        MessagesView.renderMessage(matchRoom);
        console.log('matchRoom: ', matchRoom);
        console.log('Rooms.userRoom', Rooms.userRoom);
      }
    });
  }
};



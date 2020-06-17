var App = {

  $spinner: $('.spinner img'),

  username: 'Anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data.results); //Array(15)
      MessagesView.render(data.results);
      RoomsView.render(data.results);
      RoomsView.enterRoom(data.results);
      // Rooms.addUserRoom(data.results);
      callback();
    });
  },

  fetchRoom: function() {
    Parse.readAll((data) => {
      debugger;
      // examine the response from the server request:
      console.log('fetchRoom', data.results); //Array(15)
      Rooms.addUserRoom(data.results);
      console.log('after addUserRoom');
    });
  },


  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

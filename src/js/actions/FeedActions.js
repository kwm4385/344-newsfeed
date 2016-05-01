import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'

/* eslint-disable no-console */

export default {
  getFeed() {
    $.get('/feeds.php').done(function(data) {
      console.log(data);
    });
    // Dispatcher.handleViewAction({
    //   type: Constants.ActionTypes.TASK_ADDED,
    //   text: text
    // });
  },
};

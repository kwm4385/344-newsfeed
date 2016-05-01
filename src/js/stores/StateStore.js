import assign  from 'object-assign'
import _  from 'underscore'
import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'
import BaseStore  from './BaseStore'

// data storage
let _data = {
  activeFeeds: getFeedOptions()
};

function getFeedOptions() {
  let options = {};
  _.keys(Constants.FeedTypes).forEach((o) => {
    options[Constants.FeedTypes[o].display] = true;
  });
  return options;
}

const StateStore = assign({}, BaseStore, {
  getAll() {
    return _data;
  },

  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;

    switch (action.type) {
      case Constants.ActionTypes.FEED_TOGGLED:

        StateStore.emitChange();
        break;
    }
  })
});

export default StateStore;

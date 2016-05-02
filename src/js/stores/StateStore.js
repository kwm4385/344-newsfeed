import assign  from 'object-assign'
import _  from 'underscore'
import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'
import BaseStore  from './BaseStore'

// data storage
let _data = {
  activeFeeds: getFeedOptions(),
  viewingFavs: false
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
        _data.activeFeeds[action.feed] = !_data.activeFeeds[action.feed];
        StateStore.emitChange();
        break;
      case Constants.ActionTypes.VIEW_FAVS:
        _data.viewingFavs = true;
        StateStore.emitChange();
        break;
      case Constants.ActionTypes.VIEW_ALL:
        _data.viewingFavs = false;
        StateStore.emitChange();
        break;
    }
  })
});

export default StateStore;

import assign  from 'object-assign'
import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'
import BaseStore  from './BaseStore'

// data storage
let _data = {};


const FeedStore = assign({}, BaseStore, {
  getAll() {
    return _data;
  },

  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;

    switch (action.type) {
      case Constants.ActionTypes.FEED_UPDATED:
        _data[action.feed.display] = action.items;
        FeedStore.emitChange();
        break;
      case Constants.ActionTypes.FEEDS_CLEARED:
        _data = {};
        FeedStore.emitChange();
        break;
    }
  })
});

export default FeedStore;

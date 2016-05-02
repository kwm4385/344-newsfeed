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
        action.items.forEach((i) => {
          i.feed = action.feed;
        });
        _data[action.feed.display] = action.items;
        _data[action.feed.display].forEach((s) => {
          s.isFavorite = false;
        });
        FeedStore.emitChange();
        break;
      case Constants.ActionTypes.FEEDS_CLEARED:
        _data = {};
        FeedStore.emitChange();
        break;
      case Constants.ActionTypes.FAVORITE_TOGGLED:
        let story = action.story;
        _.find(_data[story.feed.display], (s) => {return s == story;}).isFavorite =
          !_.find(_data[story.feed.display], (s) => {return s == story;}).isFavorite;
        FeedStore.emitChange();
        break;
    }
  })
});

export default FeedStore;

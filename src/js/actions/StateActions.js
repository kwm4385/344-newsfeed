import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'

/* eslint-disable no-console */

export default {
  toggleFeed(feed) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.FEED_TOGGLED,
      feed: feed
    });
  },
  viewFavs() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.VIEW_FAVS,
    });
  },
  viewAll() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.VIEW_ALL,
    });
  },
};

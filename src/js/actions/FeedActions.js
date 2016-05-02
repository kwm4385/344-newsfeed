import X2JS  from 'x2js'
import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'

/* eslint-disable no-console */

export default {
  getFeed(feedType) {
    $.get(feedType).done(function(data) {
      let json = new X2JS().xml2js(data);
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.FEED_UPDATED,
        feed: feedType,
        items: json.rss.channel.item
      });
    });
  },

  clearFeeds() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.FEEDS_CLEARED,
    });
  },

  toggleFavoriteStory(story) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.FAVORITE_TOGGLED,
      story: story
    });
  }
};

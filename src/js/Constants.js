import keyMirror  from 'fbjs/lib/keyMirror'

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: keyMirror({
    FEED_UPDATED: null,
    FEED_TOGGLED: null,
    FEEDS_CLEARED: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  FeedTypes: {
    DOMESTIC: {
      display: 'US News',
      url: 'feeds/usnews.php'
    },
    ARTS: {
      display: 'Arts and Culture',
      url: 'feeds/arts.php'
    },
    BUSINESS: {
      display: 'Business',
      url: 'feeds/business.php'
    },
    Entertainment: {
      display: 'Entertainment',
      url: 'feeds/entertainment.php'
    },
    SPORTS: {
      display: 'Sports',
      url: 'feeds/sports.php'
    },
    TECHNOLOGY: {
      display: 'Technology',
      url: 'feeds/usnews.php'
    },
    WORLD: {
      display: 'World News',
      url: 'feeds/world.php'
    },
  },

  FeedColors: {

  }
};

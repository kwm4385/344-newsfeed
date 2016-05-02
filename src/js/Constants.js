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
      url: 'feeds/usnews.php',
      color: 'rgba(244, 67, 54, 0.4)'
    },
    ARTS: {
      display: 'Arts and Culture',
      url: 'feeds/arts.php',
      color: 'rgba(103, 58, 183, 0.4)'
    },
    BUSINESS: {
      display: 'Business',
      url: 'feeds/business.php',
      color: 'rgba(63, 81, 181, 0.4)'
    },
    ENTERTAINMENT: {
      display: 'Entertainment',
      url: 'feeds/entertainment.php',
      color: 'rgba(76, 175, 80, 0.4)'
    },
    SPORTS: {
      display: 'Sports',
      url: 'feeds/sports.php',
      color: 'rgba(255, 193, 7, 0.4)'
    },
    TECHNOLOGY: {
      display: 'Technology',
      url: 'feeds/usnews.php',
      color: 'rgba(121, 85, 72, 0.4)'
    },
    WORLD: {
      display: 'World News',
      url: 'feeds/world.php',
      color: 'rgba(96, 125, 139, 0.4)'
    },
  },

  FeedColors: {

  }
};

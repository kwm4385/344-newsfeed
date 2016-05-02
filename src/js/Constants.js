import keyMirror  from 'fbjs/lib/keyMirror'

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: keyMirror({
    FEED_UPDATED: null,
    FEED_TOGGLED: null,
    FEEDS_CLEARED: null,
    FAVORITE_TOGGLED: null,
    VIEW_FAVS: null,
    VIEW_ALL: null,
    USER_CREATED: null,
    USER_LOGIN: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  FeedTypes: {
    DOMESTIC: {
      display: 'US News',
      url: 'feeds/usnews.php',
      menuColor: 'rgba(244, 67, 54, 0.4)',
      color: 'rgba(244, 67, 54, 1)'
    },
    // ARTS: {
    //   display: 'Arts and Culture',
    //   url: 'feeds/arts.php',
    //   menuColor: 'rgba(103, 58, 183, 0.4)',
    //   color: 'rgba(103, 58, 183, 1)'
    // },
    BUSINESS: {
      display: 'Business',
      url: 'feeds/business.php',
      menuColor: 'rgba(63, 81, 181, 0.4)',
      color: 'rgba(63, 81, 181, 1)'
    },
    ENTERTAINMENT: {
      display: 'Entertainment',
      url: 'feeds/entertainment.php',
      menuColor: 'rgba(76, 175, 80, 0.4)',
      color: 'rgba(76, 175, 80, 1)'
    },
    SPORTS: {
      display: 'Sports',
      url: 'feeds/sports.php',
      menuColor: 'rgba(255, 193, 7, 0.4)',
      color: 'rgba(255, 193, 7, 1)'
    },
    TECHNOLOGY: {
      display: 'Technology',
      url: 'feeds/usnews.php',
      menuColor: 'rgba(121, 85, 72, 0.4)',
      color: 'rgba(121, 85, 72, 1)'
    },
    WORLD: {
      display: 'World News',
      url: 'feeds/world.php',
      menuColor: 'rgba(96, 125, 139, 0.4)',
      color: 'rgba(96, 125, 139, 1)'
    },
  },

  FeedColors: {

  }
};

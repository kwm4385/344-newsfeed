import keyMirror  from 'fbjs/lib/keyMirror'

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: keyMirror({
    FEED_UPDATED: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  FeedTypes: {
    DOMESTIC: {
      display: 'US News',
      url: '/feeds/usnews.php'
    }
  },
};

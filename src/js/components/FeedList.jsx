import React  from 'react'
import Constants  from '../Constants.js'
import FeedActions  from '../actions/FeedActions.js'
import FeedStore  from '../stores/FeedStore.js'
import StateStore  from '../stores/StateStore.js'
import Loader  from './Loader.jsx'
import Stories  from './Stories.jsx'

export default React.createClass({
  _onChange() {
    this.setState({
      feeds: FeedStore.getAll(),
      feedOptions: StateStore.getAll().activeFeeds,
      viewFavs: StateStore.getAll().viewingFavs,
      favorites: FeedStore.getFavs()
    });
  },

  getInitialState() {
    return {
      feeds: FeedStore.getAll(),
      feedOptions: StateStore.getAll().activeFeeds,
      viewFavs: StateStore.getAll().viewingFavs,
      favorites: FeedStore.getFavs()
    };
  },

  componentWillMount() {
    FeedStore.addChangeListener(this._onChange);
    StateStore.addChangeListener(this._onChange);
  },

  componentDidMount() {
    this.refreshFeeds();
  },

  componentWillUnmount() {
    FeedStore.removeChangeListener(this._onChange);
    StateStore.removeChangeListener(this._onChange);
  },

  refreshFeeds() {
    _.keys(Constants.FeedTypes).forEach((t) => {
      if (this.state.feedOptions[Constants.FeedTypes[t].display]) {
        FeedActions.getFeed(Constants.FeedTypes[t]);
      }
    });
  },

  getActiveFeeds() {
    return _.where(_.keys(this.state.feedOptions), (k) => {
      return this.state.feedOptions[k];
    })
  },

  renderStories() {
    let feeds = this.state.viewFavs ? this.state.favorites : this.state.feeds;
    if (_.keys(feeds).length == 0) {
      return <Loader/>
    }

    let stories = [];
    _.keys(feeds).forEach((f) => {
      if (this.state.feedOptions[f]) {
        stories = _.union(stories, feeds[f]);
      }
    });

    if (stories.length > 0) {
      return <Stories active={this.state.feedOptions} feeds={feeds}/>;
    } else {
      return <p>No stories to display</p>
    }
  },

  render() {
    return (
      <div>
        <div>
          {this.renderStories()}
        </div>
      </div>
    );
  }
});

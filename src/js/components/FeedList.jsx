import React  from 'react'
import Constants  from '../Constants.js'
import FeedActions  from '../actions/FeedActions.js'
import FeedStore  from '../stores/FeedStore.js'
import Loader  from './Loader.jsx'

export default React.createClass({
  _onChange() {
    this.setState({
      feeds: FeedStore.getAll()
    });
  },

  getInitialState() {
    return {
      feeds: FeedStore.getAll(),
      feedOptions: this.getFeedOptions()
    };
  },

  componentWillMount() {
    FeedStore.addChangeListener(this._onChange);
  },

  componentDidMount() {
    this.refreshFeeds();
  },

  componentWillUnmount() {
    FeedStore.removeChangeListener(this._onChange);
  },

  refreshFeeds() {
    _.keys(Constants.FeedTypes).forEach((t) => {
      if (this.state.feedOptions[Constants.FeedTypes[t].display]) {
        FeedActions.getFeed(Constants.FeedTypes[t]);
      }
    });
  },

  getFeedOptions() {
    let options = {};
    _.keys(Constants.FeedTypes).forEach((o) => {
      options[Constants.FeedTypes[o].display] = true;
    });
    return options;
  },

  getActiveFeeds() {
    return _.where(_.keys(this.state.feedOptions), (k) => {
      return this.state.feedOptions[k];
    })
  },

  renderStories() {
    if (_.keys(this.state.feeds).length == 0) {
      return <Loader/>
    }

    let stories = [];
    _.keys(this.state.feeds).forEach((f) => {
      if (this.state.feedOptions[f]) {
        stories = _.union(stories, this.state.feeds[f]);
      }
    });

    if (stories.length > 0) {
      return 'Stories';
    } else {
      return <p>Nothing to display</p>
    }
  },

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="story-list">
          {this.renderStories()}
        </div>
      </div>
    );
  }
});

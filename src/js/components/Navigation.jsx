import { AppBar, LeftNav, MenuItem, Divider, FontIcon, Toggle, IconButton } from 'material-ui'
import Colors  from 'material-ui/lib/styles/colors'
import moment  from 'moment'
import React  from 'react'
import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'
import FeedActions  from '../actions/FeedActions.js'
import StateStore  from '../stores/StateStore.js'

export default React.createClass({

  _onChange() {
    this.setState({
      feedOptions: StateStore.getAll().activeFeeds
    });
  },

  getInitialState() {
    return {
      open: false,
      feedOptions: StateStore.getAll().activeFeeds
    };
  },

  componentWillMount() {
    StateStore.addChangeListener(this._onChange);
  },

  toggleMenu() {
    let open = !this.state.open;
    this.setState({
      open: open
    });
    this.props.onStateChange(open);
  },

  handleFeedToggle(feed) {
    FeedActions.getFeed(Constants.FeedTypes[_.find(_.keys(Constants.FeedTypes), (k) => {
      return Constants.FeedTypes[k].display == feed;
    })]);
    StateActions.toggleFeed(feed);
  },

  refreshFeeds() {
    FeedActions.clearFeeds();
    _.keys(Constants.FeedTypes).forEach((t) => {
      if (this.state.feedOptions[Constants.FeedTypes[t].display]) {
        FeedActions.getFeed(Constants.FeedTypes[t]);
      }
    });
  },

  renderLastVisit() {
    if (this.props.user.lastVisit) {
      return (
        <span>
          Your last visit was:<br/>
          {moment(this.props.user.lastVisit).format('MMMM Do YYYY, h:mm a')}
        </span>
      );
    } else {
      return '';
    }
  },

  renderFeedToggles() {
    return _.map(_.keys(this.state.feedOptions).sort(), (f, i) => {
      return (
        <MenuItem className="menu-toggle" key={i}>
          <Toggle
            label={f}
            defaultToggled={this.state.feedOptions[f]}
            onToggle={() => this.handleFeedToggle(f)}
          />
        </MenuItem>
      );
    });
  },

  render() {
    return (
      <div>
        <AppBar
          className="appBar"
          title="News Feed"
          onLeftIconButtonTouchTap={this.toggleMenu}
          iconElementRight={
            <IconButton iconClassName="material-icons" onClick={this.refreshFeeds}>
              cached
            </IconButton>
          }
        />
        <LeftNav
          open={this.state.open}
          style={{'top': '64px', height:'calc(100% - 64px)'}}>
          <div className="nav-userbox">
            <p className="bottom">{this.renderLastVisit()}</p>
          </div>
          <MenuItem>
            <FontIcon className="material-icons menu-icon" color={Colors.grey800}>inbox</FontIcon>
            All Stories
          </MenuItem>
          <MenuItem>
            <FontIcon className="material-icons menu-icon" color={Colors.grey800}>favorite</FontIcon>
            Favorites
          </MenuItem>
          <Divider/>
          {this.renderFeedToggles()}
          <Divider/>
          <MenuItem>Sign In</MenuItem>
        </LeftNav>
      </div>
    );
  }
});

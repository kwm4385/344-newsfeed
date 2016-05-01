import { AppBar, LeftNav, MenuItem, Divider, FontIcon, Toggle } from 'material-ui'
import Colors  from 'material-ui/lib/styles/colors'
import moment  from 'moment'
import React  from 'react'
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

import { AppBar, LeftNav, MenuItem, Divider, FontIcon, Toggle, IconButton, Avatar } from 'material-ui'
import Colors  from 'material-ui/lib/styles/colors'
import NavigationMenu  from 'material-ui/lib/svg-icons/navigation/menu'
import moment  from 'moment'
import React  from 'react'
import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'
import FeedActions  from '../actions/FeedActions.js'
import StateActions  from '../actions/StateActions.js'
import UserActions  from '../actions/UserActions.js'
import StateStore  from '../stores/StateStore.js'
import UserStore  from '../stores/UserStore.js'
import UserDialog  from './UserDialog.jsx'

export default React.createClass({

  _onChange() {
    this.setState({
      feedOptions: StateStore.getAll().activeFeeds,
      viewingFavs: StateStore.getAll().viewingFavs,
      user: UserStore.getAll()
    });
  },

  getInitialState() {
    return {
      open: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 750,
      feedOptions: StateStore.getAll().activeFeeds,
      viewingFavs: StateStore.getAll().viewingFavs,
      dialogOpen: false,
      user: UserStore.getAll()
    };
  },

  componentWillMount() {
    StateStore.addChangeListener(this._onChange);
    UserStore.addChangeListener(this._onChange);
  },

  toggleMenu() {

    let open = !this.state.open;
    this.setState({
      open: open
    });
    this.props.onStateChange(open);
  },

  handleFeedToggle(feed) {
    // FeedActions.getFeed(Constants.FeedTypes[_.find(_.keys(Constants.FeedTypes), (k) => {
    //   return Constants.FeedTypes[k].display == feed;
    // })]);
    StateActions.toggleFeed(feed);
  },

  handleOpenDialog() {
    this.setState({
      dialogOpen: true
    });
  },

  handleLogout() {
    UserActions.logout();
  },

  refreshFeeds() {
    FeedActions.clearFeeds();
    _.keys(Constants.FeedTypes).forEach((t) => {
      if (this.state.feedOptions[Constants.FeedTypes[t].display]) {
        FeedActions.getFeed(Constants.FeedTypes[t]);
      }
    });
  },

  showFavs() {
    StateActions.viewFavs();
  },

  showAll() {
    StateActions.viewAll();
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
      let color = Constants.FeedTypes[_.find(_.keys(Constants.FeedTypes), (t) => {
        return Constants.FeedTypes[t].display == f;
      })].color;
      return (
        <MenuItem className="menu-toggle" key={i} style={{borderLeft: '5px solid ' + color}}>
          <Toggle
            label={f}
            defaultToggled={this.state.feedOptions[f]}
            onToggle={() => this.handleFeedToggle(f)}
          />
        </MenuItem>
      );
    });
  },

  renderUserAction() {
    if (this.state.user.loggedIn) {
      return (
        <MenuItem onClick={this.handleLogout}>Log Out</MenuItem>
      );
    } else {
      return (
        <MenuItem onClick={this.handleOpenDialog}>Sign In</MenuItem>
      );
    }
  },

  renderUsername() {
    if (this.state.user.username) {
      return (
        <div className="username"><Avatar icon={<FontIcon className="material-icons" color={Colors.grey800}>perm_identity</FontIcon>}/> Welcome {this.state.user.username}</div>
      );
    }
  },

  render() {
    const allClassName = !this.state.viewingFavs ? 'menu-active' : '';
    const favsClassName = this.state.viewingFavs ? 'menu-active' : '';

    return (
      <div>
        <UserDialog open={this.state.dialogOpen}/>
        <AppBar
          className="appBar"
          title="Reuters Reader"
          iconElementLeft={<IconButton onClick={this.toggleMenu}><NavigationMenu /></IconButton>}
          iconElementRight={
            <IconButton iconClassName="material-icons" onClick={this.refreshFeeds}>
              cached
            </IconButton>
          }
        />
        <LeftNav
          open={this.state.open}
          style={{'top': '64px', height:'calc(100% - 64px)'}}>
          <div className="nav-userbox" style={{backgroundImage:"url('images/bg.jpg')"}}>
            {this.renderUsername()}
            <p className="bottom">{this.renderLastVisit()}</p>
          </div>
          <MenuItem className={allClassName} onClick={this.showAll}>
            <FontIcon className="material-icons menu-icon" color={Colors.grey800}>inbox</FontIcon>
            All Stories
          </MenuItem>
          <MenuItem className={favsClassName} onClick={this.showFavs}>
            <FontIcon className="material-icons menu-icon" color={Colors.grey800}>favorite</FontIcon>
            Favorites
          </MenuItem>
          <Divider/>
          {this.renderFeedToggles()}
          <Divider/>
          {this.renderUserAction()}
        </LeftNav>
      </div>
    );
  }
});

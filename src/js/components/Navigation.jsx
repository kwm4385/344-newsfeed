import { AppBar, LeftNav, MenuItem, Divider } from 'material-ui'
import FontIcon  from 'material-ui/lib/font-icon'
import Colors  from 'material-ui/lib/styles/colors'
import moment  from 'moment'
import React  from 'react'

export default React.createClass({

  getInitialState() {
    return {
      open: false
    };
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
            <FontIcon className="material-icons menu-icon" color={Colors.grey800}>favorite</FontIcon>
            Favorites
          </MenuItem>
          <Divider/>
          <MenuItem>Sign In</MenuItem>
        </LeftNav>
      </div>
    );
  }
});

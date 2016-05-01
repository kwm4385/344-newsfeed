import { AppBar, LeftNav, MenuItem } from 'material-ui'
import FontIcon  from 'material-ui/lib/font-icon'
import Colors  from 'material-ui/lib/styles/colors'
import moment  from 'moment'
import React  from 'react'

export default React.createClass({

  getInitialState() {
    return {
      open: true
    };
  },

  toggleMenu() {
    this.setState({
      open: !this.state.open
    });
  },

  renderLastVisit() {
    if (this.props.user.lastVisit) {
      return (
        <span>
          Your last visit was:<br/>
          {moment(this.props.user.lastVisit).format('MMMM Do YYYY, h:mm:ss a')}
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
          <MenuItem>Sign In</MenuItem>
        </LeftNav>
      </div>
    );
  }
});

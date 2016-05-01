import { AppBar, LeftNav, IconButton, IconMenu, MenuItem } from 'material-ui'
import MoreVertIcon  from 'material-ui/lib/svg-icons/navigation/more-vert'
import React  from 'react'

export default React.createClass({

  getInitialState() {
    return {
      open: false
    };
  },

  toggleMenu() {
    this.setState({
      open: !this.state.open
    });
  },

  render() {
    return (
      <div>
        <AppBar
          title="News Feed"
          onLeftIconButtonTouchTap={this.toggleMenu}
          // iconElementRight={
          //   <IconMenu
          //     iconButtonElement={
          //       <IconButton><MoreVertIcon /></IconButton>
          //     }
          //     targetOrigin={{horizontal: 'right', vertical: 'top'}}
          //     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          //   >
          //     <MenuItem primaryText="Log in" />
          //   </IconMenu>
          // }
        />
        <LeftNav
          open={this.state.open}
          style={{'top': '64px'}}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
});

import ThemeManager  from 'material-ui/lib/styles/theme-manager'
import React  from 'react'
import Theme  from '../Theme.js'
import UserActions  from '../actions/UserActions.js'
import App  from './App.jsx'

export default React.createClass({

  componentDidMount() {
    UserActions.updateLastVisit();
  },

  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Theme),
    };
  },

  render() {
    return (
      <App/>
    );
  }
});

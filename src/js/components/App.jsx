import React  from 'react'
import UserStore  from '../stores/UserStore.js'
import FeedList  from './FeedList.jsx'
import Navigation  from './Navigation.jsx'

export default React.createClass({

  _onChange() {
    this.setState(UserStore.getAll());
  },

  getInitialState() {
    return {
      user: UserStore.getAll(),
      contentClass: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 750 ? 'nav-open' : ''
    };
  },

  componentDidMount() {
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  },

  navChange(open) {
    if (open) {
      this.setState({
        contentClass: 'nav-open'
      });
    } else {
      this.setState({
        contentClass: ''
      });
    }
  },

  render() {
    return (
      <div>
        <Navigation user={this.state.user} onStateChange={this.navChange} />
        <div className={"content " + this.state.contentClass}>
          <FeedList/>
        </div>
      </div>
    );
  }
});

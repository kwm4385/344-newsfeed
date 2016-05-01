import moment  from 'moment'
import React  from 'react'
import FeedActions  from '../actions/FeedActions.js'
import UserStore  from '../stores/UserStore.js'
import Navigation  from './Navigation.jsx'

export default React.createClass({

  _onChange() {
    this.setState(UserStore.getAll());
  },

  getInitialState() {
    return UserStore.getAll();
  },

  componentDidMount() {
    UserStore.addChangeListener(this._onChange);
    FeedActions.getFeed();
  },

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  },

  renderLastVisit() {
    if (this.state.user.lastVisit) {
      return 'Your last visit was: ' + moment(this.state.user.lastVisit).format('MMMM Do YYYY, h:mm:ss a');
    } else {
      return '';
    }
  },

  render() {
    return (
      <div>
        <Navigation/>
          <div className="row">
            <div className="col-xs">
              <span>Welcome! {this.renderLastVisit()}</span>
            </div>
            <div className="col-xs">
            </div>
          </div>
      </div>
    );
  }
});

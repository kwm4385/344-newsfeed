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
  },

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  },

  render() {
    return (
      <div>
        <Navigation user={this.state.user}/>

      </div>
    );
  }
});

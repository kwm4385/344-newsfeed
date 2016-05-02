import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'

/* eslint-disable no-console */

export default {
  updateLastVisit() {
    localStorage.setItem('lastVisit', new Date().getTime())
  },

  create(username, password) {
    console.log('create', username, password);
  },

  login(username, password) {
    console.log('login', username, password);
  }
};

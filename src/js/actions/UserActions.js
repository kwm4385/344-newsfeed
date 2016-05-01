import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'

/* eslint-disable no-console */

export default {
  updateLastVisit() {
    localStorage.setItem('lastVisit', new Date().getTime())
  },
};

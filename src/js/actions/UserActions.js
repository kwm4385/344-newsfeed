import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'

/* eslint-disable no-console */

export default {
  updateLastVisit() {
    localStorage.setItem('lastVisit', new Date().getTime())
  },

  create(username, password) {
    console.log('create', username, password);
    $.ajax({
      type: "POST",
      url: 'createuser.php',
      data: {
        username: username,
        password: password
      },
    }).done((data) => {
      console.log(data);
    });
  },

  login(username, password) {
    console.log('login', username, password);
    $.ajax({
      type: "POST",
      url: 'login.php',
      data: {
        username: username,
        password: password
      },
    }).done((data) => {
      console.log(data);
    }).error((data) => {
      console.log(data);
    });
  }
};

import assign  from 'object-assign'
import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'
import BaseStore  from './BaseStore'

// data storage
let _data = {
  lastVisit: parseInt(localStorage.getItem('lastVisit'))
};

// Facebook style store creation.
const UserStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
    return _data;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;

    switch (action.type) {
      case Constants.ActionTypes.TASK_ADDED:
        UserStore.emitChange();
        break;
    }
  })
});

export default UserStore;

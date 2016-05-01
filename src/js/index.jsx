import $  from 'jquery'
import React  from 'react'
import ReactDOM  from 'react-dom'
import injectTapEventPlugin  from 'react-tap-event-plugin'
import _  from 'underscore'
import AppContainer  from './components/AppContainer.jsx'

injectTapEventPlugin();
window.$ = $;
window._ = _;
ReactDOM.render(<AppContainer />, document.getElementById('main'));

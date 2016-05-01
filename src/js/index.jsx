import $  from 'jquery'
import React  from 'react'
import ReactDOM  from 'react-dom'
import injectTapEventPlugin  from 'react-tap-event-plugin'
import AppContainer  from './components/AppContainer.jsx'

injectTapEventPlugin();
window.$ = $;
ReactDOM.render(<AppContainer />, document.getElementById('main'));

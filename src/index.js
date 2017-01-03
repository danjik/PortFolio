import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import configureStore from './scripts/store/configureStore'
import './styles/app.css'
import './styles/reset.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './scripts/containers/Home'
import About from './scripts/containers/About'
import Realisation from './scripts/containers/Realisation'
import Work from './scripts/containers/Work'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const store = configureStore()

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider>
      <Router history={ browserHistory }>
        <Route path="/about" component={ About } />
        <Route path="/work" component={ Work } />
        <Route path="/project" component={ Realisation } />
        <Route path="*" component={ Home } />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById( 'root' )
)

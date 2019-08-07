import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { GlobalStyle } from './Components/Styles/GlobalStyles.js'

import Header from './Header'
import Dashboard from './Pages/Dashboard/'
import Details from './Pages/Details'

import { AppShipmentProvider } from './store'

export default class App extends Component {
  constructor () {
    super()
  }
  render () {
    return (

      <Router component={App}>
        <GlobalStyle />
        <AppShipmentProvider>
          <Header/>
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/details/:id?' component={Details} />
          <Redirect from='/' exact to='/dashboard' />
        </AppShipmentProvider>
      </Router>

    )
  }
}

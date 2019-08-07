import React from 'react'
import AppContainer from './nav/AppContainer'
import {init} from './helpers/appConfig'

export default class App extends React.Component {
  componentWillMount() {
    init()
  }
  render() {
    return <AppContainer />
  }
}

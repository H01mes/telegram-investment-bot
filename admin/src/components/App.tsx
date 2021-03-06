import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import config from '../config.json'
import '../styles/App.css'
import Dashboard from './Dashboard'
import Login from './Login'

export interface AppState {
  authorized: boolean
}

export default class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props)
    
    this.state = {
      authorized: false
    }
  }
  
  async checkAuth() {
    let url = process.env.NODE_ENV === 'production' ?
      `http://${config.prod.api.host}:${config.prod.api.port}/` :
      `http://${config.dev.api.host}:${config.dev.api.port}/`
    
    let res = await fetch(url + 'auth/check', {
      credentials: 'include'
    })
    
    this.setState({
      authorized: res.status === 200
    })
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={this.state.authorized ? Dashboard : Login}/>
        </div>
      </BrowserRouter>
    )
  }
  
  async componentDidMount() {
    await this.checkAuth()
  }
}
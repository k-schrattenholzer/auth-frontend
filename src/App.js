import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";

import './App.css';
import HomePage from './components/HomePage.js';
import LoginPage from './components/LoginPage.js';
import SignUpPage from './components/SignUpPage.js';
import TaskPage from './components/TaskPage.js';

const TOKEN_KEY = 'TOKEN'

export default class App extends Component {

  state = {
    token: localStorage.getItem(TOKEN_KEY) || ''
  }

  handleTokenChange = token => {
    localStorage.setItem(TOKEN_KEY, token)
    this.setState({ token: token })
  }

  handleLogout = () => {
    localStorage.clear()
    this.setState({ token: '' })
  }

  render() {
      return (
      <div className="Container">
        <Router>
          <header>
            <NavLink
              className="NavLink"
              exact activeClassName='active-link' to='/'>home</NavLink>
            <NavLink
              className="NavLink"
              exact activeClassName='active-link' to='/signup'>sign up</NavLink>
            <NavLink
              className="NavLink"
              exact activeClassName='active-link' to='/login'>login</NavLink>
            <NavLink
              className="NavLink"
              exact activeClassName='active-link' to='/tasklist'>my to-do list</NavLink>
            {this.state.token && <button 
                                  onClick={this.logout}
                                  className="NavLink LogoutButton"
                                  >LOGOUT</button>}
          </header>
          <div exact className="ContentDiv"> 
            <Switch>
                <Route
                      path="/"
                      exact render={(routerProps) => <HomePage {...routerProps}/>}
                  />
                <Route
                      path="/signup"
                      exact render={(routerProps) => <SignUpPage
                          handleTokenChange={this.handleTokenChange} {...routerProps}/>}
                  />
                <Route
                      path="/login"
                      exact render={(routerProps) => <LoginPage {...routerProps}/>}
                  />
                <Route
                      path="/tasklist"
                      exact render={(routerProps) =>
                        this.state.token
                          ? <TaskPage
                            token={this.state.token}
                            {...routerProps}/>
                          : <Redirect to="/signup"/>
                        }
                  />
            </Switch>
          </div>
        </Router>
      </div>
    )}
}



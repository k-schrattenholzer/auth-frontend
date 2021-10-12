import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage.js';
import LoginPage from './components/LoginPage.js';
import SignUpPage from './components/SignUpPage.js';
import TaskPage from './components/TaskPage.js';


export default class App extends Component {
  render()
    {
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
          </header>
          <div className="Content'"> 
            <Switch>
                <Route
                      path="/"
                      exact render={(routerProps) => <HomePage {...routerProps}/>}
                  />
                <Route
                      path="/signup"
                      exact render={(routerProps) => <SignUpPage {...routerProps}/>}
                  />
                <Route
                      path="/login"
                      exact render={(routerProps) => <LoginPage {...routerProps}/>}
                  />
                <Route
                      path="/tasklist"
                      exact render={(routerProps) => <TaskPage {...routerProps}/>}
                  />
            </Switch>
          </div>
        </Router>
      </div>
    )}
}



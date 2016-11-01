import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import HomePageContainer from './home_page_container';

import App from './app';

class AppRouter extends React.Component {

  constructor(props) {

  }

  _ensureLoggedIn() {
    const currentState = this.props.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  }

  _redirectIfLoggedIn() {
    const currentState = this.props.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/home');
    }    
  }

  render() {
    return(

      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={this._redirectIfLoggedIn.bind(this)} />
        <Route path="/home" component={HomePageContainer} onEnter={this._ensureLoggedIn.bind(this)} />
      </Router>

    )
  }

}

export default AppRouter;
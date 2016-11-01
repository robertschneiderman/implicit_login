import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';

let store;
if (window.currentUser) {
  const initialState = {session: {currentUser: window.currentUser}};
  store = configureStore(initialState);
} else {
  store = configureStore();
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDom.render(<Root store={store} />, root)
});
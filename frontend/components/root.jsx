
import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import AppRouter from './router';


const Root = ({store}) => (
  <Provider store={store}>
    <AppRouter store={store} />
  </Provider>
)

export default Root;
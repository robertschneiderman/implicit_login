import { Provider } from 'react-redux';
import App from './app';


const Root = ({store}) => (
  <Provider store={store}>
    <App />
  </Provider>
)
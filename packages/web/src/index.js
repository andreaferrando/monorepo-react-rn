import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore, { history } from './redux/store';
import { ConnectedRouter } from 'react-router-redux';
import App from './components/App';

const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App {...history}/>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));


/*REACT ROUTER TUTORIAL: https://blog.pshrmn.com/simple-react-router-v4-tutorial/*/
/*this.props.history.push({ pathname: '/transfer' });*/
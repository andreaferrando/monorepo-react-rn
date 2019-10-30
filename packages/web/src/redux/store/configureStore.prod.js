import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import API from 'shared/services/';
import rootReducer from 'shared/redux/reducers';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const services = {
  api: API,
};

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(services), apiMiddleware),
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('shared/redux/reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;

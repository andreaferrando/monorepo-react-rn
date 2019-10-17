import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import monitorReducersEnhancer from './reducers/enhancers/monitorReducers';
import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers';
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState,
    enhancers: [monitorReducersEnhancer]
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { persistMiddlware } from './middlewares/persistmiddlware';

export const store = createStore(
  reducers,
  {},
  applyMiddleware(persistMiddlware, thunk)
);

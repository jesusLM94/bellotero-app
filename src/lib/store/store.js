import { createStore, applyMiddleware } from 'redux'
import belloteroApp from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const store = createStore(
    belloteroApp,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store

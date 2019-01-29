import { createStore } from 'redux'
import belloteroApp from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(belloteroApp, composeWithDevTools());

export default store

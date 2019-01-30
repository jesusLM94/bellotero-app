import { createStore } from 'redux'
import belloteroApp from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(belloteroApp, composeWithDevTools());

export default store

import  { combineReducers } from 'redux'
import {
    ADD_PAGE,
} from './actions'

function pages(state = [], action) {
    switch (action.type) {
        case ADD_PAGE:
            return [
                ...state,
                {
                    name: action.payload.name,
                    route: action.payload.route,
                }
            ]
        default:
            return state
    }
}

const belloteroApp = combineReducers({
    pages,
})

export default belloteroApp
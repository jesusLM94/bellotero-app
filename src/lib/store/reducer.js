import  { combineReducers } from 'redux'
import {
    ADD_MENU_ITEM,
    ADD_PAGE,
} from './actions'
import _get from "lodash/get";

function pages(state = {}, action) {
    switch (action.type) {
        case ADD_MENU_ITEM: {
            const { name, route } = action.payload
            return {
                ...state,                                             
                [route]: { ...state[route], name, route }
            }
        }
        case ADD_PAGE:
        {
            const { route, content } = action.payload
            
            return {
                // Keep all previous pages
                ...state,
                // Access to the page
                [route]: {
                    // Keep current page state (name/route)
                    ...state[route],
                    // add slider
                    content,
                }
            }
        }
        default:
            return state
    }
}

const belloteroApp = combineReducers({
    pages,
})

export default belloteroApp

export const getContent = (state, route, params) => {
    return _get(state.pages, [route, 'content', params], {})
}
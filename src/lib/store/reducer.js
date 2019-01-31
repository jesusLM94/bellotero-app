import  { combineReducers } from 'redux'
import {
    ADD_PAGE,
    ADD_SLIDER,
} from './actions'

function pages(state = {}, action) {
    switch (action.type) {
        case ADD_PAGE: {
            const { name, route } = action.payload
            return {
                ...state,                                             
                [route]: { ...state[route], name, route }
            }
        }
        case ADD_SLIDER:
        {
            const { route, title, reviews } = action.payload
            
            return {
                // Keep all previous pages
                ...state,
                // Access to the page
                [route]: {
                    // Keep current page state (name/route)
                    ...state[route],
                    // add slider
                    slider: {
                        title,
                        reviews,
                    }
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
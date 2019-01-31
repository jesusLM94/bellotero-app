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
                [route]: { name, route }
            }
        }
        case ADD_SLIDER:
        {
            const { pageId, title, reviews } = action.payload
            
            return {
                // Keep all previous pages
                ...state,
                // Access to the page
                [pageId]: {
                    // Keep current page state (name/route)
                    ...state[pageId],
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
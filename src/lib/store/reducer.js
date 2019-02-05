import  { combineReducers } from 'redux'
import {
    ADD_CALCULATOR,
    ADD_PAGE,
    ADD_SLIDER,
} from './actions'
import _get from "lodash/get";

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
        case ADD_CALCULATOR:
        {
            const { route, title, description } = action.payload
            return {
                ...state,
                [route]: {
                    calculator: {
                        title,
                        description,
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

export const getCalculator = (state) => {
    return _get(state.pages, `[page-2].calculator`, {})
}

export const getSlider = (state, params) => {
    return _get(state, `pages[${params}].slider`, {})
}
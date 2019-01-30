import  { combineReducers } from 'redux'
import {
    ADD_PAGE,
    ADD_SLIDER,
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
        case ADD_SLIDER:
            return state.map((page) => {
                if (page.route === action.payload.pageId) {
                    return Object.assign({}, page, {
                        slider: {
                            title: action.payload.title,
                            reviews: action.payload.reviews,
                        }
                    })
                }
                return page;
            });
        default:
            return state
    }
}

const belloteroApp = combineReducers({
    pages,
})

export default belloteroApp
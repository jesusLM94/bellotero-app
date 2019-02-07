import  { combineReducers } from 'redux'
import {
    ADD_MENU_ITEM,
    ADD_PAGE,
    TOGGLE_ACTIVE,
    CHANGE_MONTHLY_SPENDING,
    CHANGE_EMPLOYEES_NUMBER,
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
        case TOGGLE_ACTIVE:
        {
            return {
                ...state,
                'page-1': {
                    ...state['page-1'],
                    'content': {
                        ...state['page-1']['content'],
                        active: action.active,
                    }
                }
            }
        }
        case CHANGE_MONTHLY_SPENDING:
        {
            return {
                ...state,
                'page-2': {
                    ...state['page-2'],
                    'content': {
                        ...state['page-2']['content'],
                        monthlySpending: action.monthlySpending,
                    }
                }
            }
        }
        case CHANGE_EMPLOYEES_NUMBER:
        {
            return {
                ...state,
                'page-2': {
                    ...state['page-2'],
                    'content': {
                        ...state['page-2']['content'],
                        employees: action.employees,
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

export const getContent = (state, route, params) => {
    return _get(state.pages, [route, 'content', params], {})
}

export const getActive = (state) => {
    return _get(state.pages, '[page-1].content.active', 1)
}

export const getMonthlySpending = (state) => {
    return _get(state.pages, '[page-2].content.monthlySpending', 0)
}

export const getEmployeesNumber = (state) => {
    return _get(state.pages, '[page-2].content.employees', 1)
}
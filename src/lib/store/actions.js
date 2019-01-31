/*
 * action types
 */
export const ADD_PAGE = 'ADD_PAGE'
export const ADD_SLIDER = 'ADD_SLIDER'
export const ADD_CALCULATOR = 'ADD_CALCULATOR'
/*
 * action creators
 */

export function addPage(name, route) {
    return {
        type: ADD_PAGE,
        payload: {
            name,
            route,
        }
    }
}

export function addSlider(route, title, reviews) {
    return {
        type: ADD_SLIDER,
        payload: {
            route,
            title,
            reviews,
        },
    }
}

export function addCalculator(route, title, description) {
    return {
        type: ADD_CALCULATOR,
        payload: {
            route,
            title,
            description,
        }
    }
}
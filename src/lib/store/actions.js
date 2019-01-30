/*
 * action types
 */
export const ADD_PAGE = 'ADD_PAGE'
export const ADD_SLIDER = 'ADD_SLIDER'
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

export function addSlider(pageId, title, reviews) {
    return {
        type: ADD_SLIDER,
        payload: {
            pageId,
            title,
            reviews,
        },
    }
}
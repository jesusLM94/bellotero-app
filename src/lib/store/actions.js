/*
 * action types
 */
export const ADD_PAGE = 'ADD_PAGE'
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
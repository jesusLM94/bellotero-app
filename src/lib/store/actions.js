import axios from "axios";
/*
 * action types
 */
export const ADD_MENU_ITEM = 'ADD_MENU_ITEM'
export const ADD_SLIDER = 'ADD_SLIDER'
export const ADD_CALCULATOR = 'ADD_CALCULATOR'
/*
 * action creators
 */

export function addMenuItem(name, route) {
    return {
        type: ADD_MENU_ITEM,
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

export function fetchMenuItems() {
    return function(dispatch) {
        return axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json')
            .then(response => {
                const pages = (response.data.menu.items);
                pages.forEach(page => {
                    dispatch(addMenuItem(page.text, page.route));
                })
            })
    }
}
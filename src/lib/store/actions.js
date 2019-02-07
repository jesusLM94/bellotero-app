import axios from "axios";
/*
 * action types
 */
export const ADD_MENU_ITEM = 'ADD_MENU_ITEM'
export const ADD_PAGE = 'ADD_PAGE'
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE'
export const CHANGE_MONTHLY_SPENDING = 'CHANGE_MONTHLY_SPENDING'
export const CHANGE_EMPLOYEES_NUMBER = 'CHANGE_EMPLOYEES_NUMBER'
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

export function addPage(route, content) {
    return {
        type: ADD_PAGE,
        payload: {
            route,
            content,
        },
    }
}

export function toggleActive(active) {
    return {
        type: TOGGLE_ACTIVE,
        active: active,
    }
}

export function changeMonthlySpending(spending) {
    return {
        type: CHANGE_MONTHLY_SPENDING,
        monthlySpending: spending,
    }
}

export function changeEmployeesNumber(employees) {
    return {
        type: CHANGE_EMPLOYEES_NUMBER,
        employees: employees,
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

export function fetchPageContent(url, route) {
    return function(dispatch) {
        return axios.get(url).then(response => {
                dispatch(addPage(route, response.data))
            }
        )
    }
}
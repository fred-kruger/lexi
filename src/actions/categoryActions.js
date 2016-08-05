import fetch from 'isomorphic-fetch';
import { WP_URL } from '../wp-url';
import { RECEIVE_CATEGORIES } from '../constants/AppConstant';

export function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        payload: categories
    }
}

export function fetchCategories() {
    return function (dispatch) {
        return fetch(WP_URL + '/categories')
            .then(response => Promise.all(
                [response.headers.get('X-WP-TotalPages'), response.json()]
            ))
            .then(categoriesData => dispatch(
                receiveCategories(categoriesData[1])
            ));
    }
}
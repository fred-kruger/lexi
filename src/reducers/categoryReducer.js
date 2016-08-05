import { RECEIVE_CATEGORIES } from '../constants/AppConstant.js';

const defaultState = {
    categories: []
}

export default function categories(state = defaultState, action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            const categories = action.payload;

            return Object.assign({}, state, {
                categories: categories
            });

        default:
            return state;
    }
}
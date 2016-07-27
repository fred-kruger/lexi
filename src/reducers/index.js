import { combineReducers } from 'redux';
import pages from './pages';
import posts from './posts';
import categories from './categoryReducer'; 
// TODO: try to import * from './' instead of importing individual reducers

const rootReducer = combineReducers({
    pages,
    posts,
    categories
});

export default rootReducer;
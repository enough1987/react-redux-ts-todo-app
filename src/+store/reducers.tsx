import articlesReducer from '../components/articles/+store/articles.reducer';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

export const REDUCERS = combineReducers({
    routing: routerReducer,
    articles: articlesReducer,
});

import { applyMiddleware, combineReducers, createStore } from 'redux';
import articlesReducer from '../components/articles/+store/articles.reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(combineReducers({
        articles: articlesReducer,
    }),
    applyMiddleware(
        logger,
        thunk,
    ),
);
export default store;

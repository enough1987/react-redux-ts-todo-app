import { applyMiddleware, combineReducers, createStore } from 'redux';
import articlesReducer from '../components/articles/+store/articles.reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
}

const store = createStore(combineReducers({
        articles: articlesReducer,
    }),
    applyMiddleware(
        ...middlewares,
        thunk,
    ),
);
export default store;

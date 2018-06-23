import { applyMiddleware, combineReducers, createStore } from 'redux';
import articlesReducer from '../components/articles/+store/articles.reducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerReducer } from 'react-router-redux';

const MIDDLEWARES = [];

if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({
        collapsed: true,
        duration: true,
    });

    MIDDLEWARES.push(logger);
}

const store = createStore(combineReducers({
        routing: routerReducer,
        articles: articlesReducer,
    }),
    applyMiddleware(
        ...MIDDLEWARES,
        thunk,
    ),
);
export default store;

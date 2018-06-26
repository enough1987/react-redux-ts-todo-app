import { applyMiddleware, combineReducers, createStore } from 'redux';
import articlesReducer from '../components/articles/+store/articles.reducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import { combineEpics, createEpicMiddleware, Epic } from 'redux-observable';
import { Action } from './dictionery';
import { mapTo } from 'rxjs/operators';
import { ArticleActionsTypes } from '../components/articles/+store/articles.action';

const MIDDLEWARES = [];

if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({
        collapsed: true,
        duration: true,
    });

    MIDDLEWARES.push(logger);
}

const pingEpic: Epic<Action> = (action$) =>
    action$.ofType('TEST_EPIC').pipe(
        mapTo({ type: ArticleActionsTypes.ADD_WITH_EPIC }),
    );

const epicMiddleware = createEpicMiddleware();

const store = createStore(combineReducers({
        routing: routerReducer,
        articles: articlesReducer,
    }),
    applyMiddleware(
        ...MIDDLEWARES,
        epicMiddleware,
        thunk,
    ),
);

epicMiddleware.run(combineEpics(
    pingEpic,
));

setTimeout(() => {
    store.dispatch({
        type: 'TEST_EPIC',
    });
}, 1500);

export default store;

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { EPICS } from './epics';
import { ArticleActionsTypes } from '../components/articles/+store/articles.action';
import { REDUCERS } from './reducers';

const MIDDLEWARES = [];

if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({
        collapsed: true,
        duration: true,
    });

    MIDDLEWARES.push(logger);
}

const epicMiddleware = createEpicMiddleware();

const store = createStore(REDUCERS,
    applyMiddleware(
        ...MIDDLEWARES,
        epicMiddleware,
        thunk,
    ),
);

epicMiddleware.run(combineEpics(
    EPICS,
));

// used for testing epic
store.dispatch({
        type: ArticleActionsTypes.TEST_EPIC,
    });

export default store;

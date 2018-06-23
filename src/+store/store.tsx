import { applyMiddleware, combineReducers, createStore } from 'redux';
import articlesReducer from '../components/articles/+store/articles.reducer';
import thunk from 'redux-thunk';

const logger = (_store: any)  => (next: (action: any) => {}) => (action: any) => {
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

const store = createStore(combineReducers({
        articles: articlesReducer,
    }),
    applyMiddleware(
        logger,
        thunk,
    ),
);
export default store;

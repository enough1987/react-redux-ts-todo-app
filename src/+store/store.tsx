import { combineReducers, createStore } from 'redux';
import articlesReducer from '../components/articles/+store/articles.reducer';

const store = createStore(combineReducers({
        articles: articlesReducer,
    }),
);
export default store;

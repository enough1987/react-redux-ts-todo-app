import { createStore } from 'redux';
import rootReducer from './reducers/articles.reducer';

const store = createStore(rootReducer);
export default store;

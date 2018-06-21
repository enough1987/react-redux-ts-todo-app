import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './components/articles/+store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
            <App>
            </App>
    </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
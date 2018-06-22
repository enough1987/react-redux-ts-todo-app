import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './+store/store';
import { Provider } from 'react-redux';
import Routing from './Routing';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router';

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Routing/>
            </App>
        </Router>
    </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();

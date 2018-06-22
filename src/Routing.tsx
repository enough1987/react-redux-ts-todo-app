import * as React from 'react';
import Articles from './components/articles/Articles';
import { Route, Switch } from 'react-router';
import NotFaund from './components/notFaund/Not-faund';

class Routing extends React.Component {
    public render() {
        return (
            <Switch>
                <Route exact={true} path='/' component={Articles}/>
                <Route path='/articles' component={Articles}/>
                <Route path='*' component={NotFaund}/>
            </Switch>
        );
    }
}

export default Routing;

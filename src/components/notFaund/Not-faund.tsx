import * as React from 'react';
import './Not-faund.css';

class NotFaund extends React.Component {
    public render() {
        return (
            <div className='not-faund'>
                <h1 className='not-faund-title'>404</h1>
                <h2 className='not-faund-body'>
                    error: Page is not found.
                    <li> Home page is here </li>
                </h2>
            </div>
        );
    }
}

export default NotFaund;

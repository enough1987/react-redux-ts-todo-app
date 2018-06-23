import * as React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    public render() {
        return (
            <header className='App-header'>
                <h1 className='App-title'>Welcome to todo app </h1>
                <ul>
                    <li><Link to={`/`} >Home</Link></li>
                    <li><Link to={`/articles`} >Articles</Link></li>
                </ul>
            </header>
        );
    }
}

export default Header;

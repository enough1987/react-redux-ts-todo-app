import * as React from 'react';
import logo from './logo.svg';

class Header extends React.Component {
    public render() {
        return (
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <h1 className='App-title'>Welcome to React with redux , connect, typescript</h1>
            </header>
        );
    }
}

export default Header;

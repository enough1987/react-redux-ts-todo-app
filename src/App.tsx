import * as React from 'react';
import './App.css';

import Articles from './components/articles/Articles';
import logo from './logo.svg';

class App extends React.Component {

  public render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React with redux , connect, typescript</h1>
        </header>
        <div className='App-intro'>
            <Articles>
            </Articles>
        </div>
      </div>
    );
  }
}

export default App;

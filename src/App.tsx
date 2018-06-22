import * as React from 'react';
import './App.css';
import Header from './components/header/Header';

class App extends React.Component {

  public render() {
    return (
      <div className='App'>
        <Header>
        </Header>
        <div className='App-intro'>
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { Navbar } from './components'

class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Navbar />
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

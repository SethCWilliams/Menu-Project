import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'



class App extends Component {
    constructor(props){
        super (props);
        this.state = {
            item: [],
            price: [],
            description: [],
        }
    //    things that i need to bind on my own need to go in here, as well as any
        //kind of submit states, changes, etc.
    }
  render() {
    return (
      <div className="App">
        <h1>TeaThaime</h1>
          <Header/>
      </div>
    );
  }
}

export default App;

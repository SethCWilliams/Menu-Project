import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Menu from  './Menu';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: [{name:'PB+J', price: 200, description: "it's pizza"}, {name:'Lettuce Laden Lardons', price: 14, description: "We don't even know what lardons are. Enjoy."},
                {name:'Tina Fey Special', price: 25, description: ''}, {name:"Bob's Burger", price: 15, description:"Pretty plain, but people seem to like it."}],
        };
    //    things that i need to bind on my own need to go in here, as well as any
        //kind of submit states, changes, etc.

    }


  render() {
    // console.log(addMenuItem);
    return (
      <div className="container">
          <h1>TeaThaime</h1>
          <Header/>
          <Menu items={this.state.item}/>
      </div>
    );
  }
}

export default App;

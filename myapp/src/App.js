import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component{
  state = {
    ninjas: [
      {name:'Rahul', age:30, belt: 'black', id: 1},
      {name:'Yoshi', age:25, belt: 'green', id: 2},
      {name:'John', age:18, belt: 'red', id: 3},
      {name:'Jane', age:26, belt: 'pink', id: 4}
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;

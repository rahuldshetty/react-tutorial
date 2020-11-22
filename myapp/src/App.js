import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component{
  state = {
    ninjas: [
      {name:'Rahul', age:30, belt: 'black', id: 1},
      {name:'Yoshi', age:10, belt: 'green', id: 2},
      {name:'John', age:18, belt: 'red', id: 3},
      {name:'Jane', age:26, belt: 'pink', id: 4}
    ]
  }

  addNinja = (ninja) => {
    // Spreader
    ninja.id = this.state.ninjas.length + 1;
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas : ninjas
    })
  }

  deleteNinja = (id) => {
    console.log(id)
    let ninjas = this.state.ninjas.filter( ninja => {
      return ninja.id != id
    });
    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount(){
    console.log("Component MOunted...")
  }

  componentDidUpdate(prevProp, prevState){
    console.log("Updated....");
    console.log(prevProp, prevState);
  }

  render(){
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;

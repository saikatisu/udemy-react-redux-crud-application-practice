import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = { count:0 }
  }

  handlePlusButton = () => {
    console.log("handlePlusButton")
    console.log(this.state.count)
    this.setState({count:this.state.count + 1})
  }

  handleMainasuButton = () => {
    console.log("handleMainasuButton")
    console.log(this.state.count)
    this.setState({count:this.state.count - 1})
  }

  render(){
    return (
      <React.Fragment>
        <div>count:{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMainasuButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;

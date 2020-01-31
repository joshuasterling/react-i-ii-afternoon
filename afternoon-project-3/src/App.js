import React from 'react';
import data from './data'
import Header from './Components/Header'
import Card from './Components/Card'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0
    }
  }

  handleChangePlus = () => {
    if(this.state.index === data.length - 1) {
      this.setState({ index: 0 })
    } else {
      this.setState({ index: this.state.index + 1})      
    }
  }

  handleChangeMinus= () => {
    if(this.state.index === 0) {
      this.setState({ index: data.length -1 })
    } else {
      this.setState({ index: this.state.index - 1 })      
    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Card index={this.state.index} data={data}/>
        <br />
        <button className='button1' onClick={this.handleChangeMinus}> {`< Previous`} </button>
        <button className='button2' onClick={this.handleChangePlus}> {`Next >`} </button>
      </div>
    )
  }
}

export default App;
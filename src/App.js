import React, { Component } from 'react';
import './App.css';

class App extends Component {

 constructor(props) {
    super(props);
    this.state = {value: ''};

    // this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange=(event)=> {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <div className="App">
      <div className="App-header">
          <div className = "Auth-main-container">
            {/* <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value= "Submit"/>
            </form> */}
          </div>
       </div> 
      </div>
      
    );
  }
}

export default App;


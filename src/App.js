import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  state={
    server: 'https://warehouse-stock-server.irvinfiz.now.sh/graph',
    suppliers: []

  }

  async componentDidMount(){
    const query = `query{
      suppliers {
        _id
      }
    }`

    const url = this.state.server;
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    };
    const res = await fetch(url, opts);
    const data = await res.json();
    console.log(data.data.suppliers)
    this.setState({suppliers: data.data.suppliers })
  }


  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <div className="Content">
            hola
            <Switch>

              {/* <Route path="/education/certifications/:id" exact component={ props => ( <Certification {...props} 
              paths={this.state.paths} /> )} 
              /> */}
            </Switch>
          </div>
          <div className='Options'>
           
          </div>
          <div className='Footer'>
           
          </div>
        </div>
      
      </BrowserRouter>
  );
  }
}

export default App;

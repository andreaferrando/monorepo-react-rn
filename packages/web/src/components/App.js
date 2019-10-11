import React, { Component } from 'react';
// import Home from './Home';
import WebAuth from './Auth';
import { initNetworking } from 'shared/init';

class App extends React.Component {

  componentWillMount() {
		initNetworking()
	}
  
  render() {
    return (
      <div>
        <WebAuth />
      </div>
    );
  }
}


export default App;

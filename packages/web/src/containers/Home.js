import React, { Component } from 'react';
import { compose } from 'recompose';
import sharedAuthFunctions from 'shared/containers/Auth';
import shR from 'shared/res/R';
import NavComponent from '../components/navbar/index';
import './styles/homeStyle.css';


class Home extends Component {
  render() {
    return (
      <div className="parent">
        <NavComponent />
        <div className="mainDivContent">
          <h1 className="header">{shR.strings.auth.welcome}</h1>
        </div>
      </div>
    );
  }
}

export default compose(sharedAuthFunctions)(Home);

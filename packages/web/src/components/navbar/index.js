/* eslint-disable react/jsx-indent-props */
import React, { Component } from 'react';
import 'antd';
import '../styles/navStyle.css';
import images from 'shared/res/images';
import { Redirect } from 'react-router-dom';
import sharedAuthFunctions from 'shared/containers/Auth';
import { isLoggedIn } from '../../utils';
import WebRoute from '../../utils/webroute';
import R from '../../res/R';

class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.burgerToggle = () => {
      const linksEl = document.querySelector('.narrowLinks');
      if (linksEl.style.display === 'block') {
        linksEl.style.display = 'none';
      } else {
        linksEl.style.display = 'block';
      }
    };
  }

  render() {
    if (!isLoggedIn()) {
      return <Redirect to={WebRoute.auth} />;
    }
    const { logoutButtonTitle, logout } = this.props;
    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <img src={images.main.logo} alt="" />
            <a href="/">{R.strings.home.links.home}</a>
            <a onClick={() => { logout(); }}>
              {this.props.logoutButtonTitle}
            </a>
          </div>
        </div>
        <div className="navNarrow">
          <img src={images.main.logo} alt="" />
          <i
            className="fa fa-bars fa-2x"
            onClick={this.burgerToggle}
          />
          <div className="narrowLinks">
            <a href="/" onClick={this.burgerToggle}>
              {R.strings.home.links.home}
            </a>
            <a
                onClick={() => {
                  this.logout();
                }}
            >
              {logoutButtonTitle}
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default sharedAuthFunctions(NavComponent);

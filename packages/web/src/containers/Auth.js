import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import sharedAuthFunctions from 'shared/containers/Auth';
import shR from 'shared/res/R';
import images from 'shared/res/images';
import WebRoute from '../utils/webroute';
import './styles/authStyle.css';

class Auth extends Component {
  render() {
    const {
      isAuthenticated,
      email,
      onEmailUpdate,
      password,
      onPasswordUpdate,
      onLoginClicked,
      loginButtonTitle,
    } = this.props;
    if (isAuthenticated === true) {
      return <Redirect to={WebRoute.home} />;
    }
    return (
      <div>
        <img src={images.main.logo} alt="" className="logoImage" />
        <Form className="authForm" onSubmit={this.handleSubmit}>
          <h2 className="authHeader">{shR.strings.auth.welcome}</h2>
          <Form.Item className="authFormItem">
            {shR.strings.auth.email}
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                onEmailUpdate(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item className="authFormItem">
            {shR.strings.auth.password}
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                onPasswordUpdate(e.target.value);
              }}
            />
          </Form.Item>
          <Button
            className="authFormButton"
            variant="primary"
            onClick={() => {
              onLoginClicked();
            }}
          >
            {loginButtonTitle}
          </Button>
        </Form>
      </div>
    );
  }
}

export default sharedAuthFunctions(Auth);

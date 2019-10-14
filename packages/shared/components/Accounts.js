import React, { Component } from 'react';

export default function sharedAuthFunctions(OriginalComponent) {
  return class extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
      //return original component with additional props
      return (
        <OriginalComponent 
          {...this.props}
        />
      );
    }
  }
}  
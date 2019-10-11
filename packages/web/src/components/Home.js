import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/home_actions';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
      <h1>Redux data: {this.props.data}</h1>
    );
  }
}

const mapStateToProps = state => {
  const { data, error, loading } = state.homeData.data
  return { data, error, loading }
};

export default connect(mapStateToProps, actions)(Home);

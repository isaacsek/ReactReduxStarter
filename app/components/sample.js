import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as actions from '../actions';

class Sample extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        This is a sample component. <Link to = "/sample2" className = "btn btn-primary">Sample 2</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      reducer: state.mainReducer
    };
}

export default connect(mapStateToProps, actions)(Sample);

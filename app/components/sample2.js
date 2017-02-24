import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as actions from '../actions';

class Sample2 extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadData();
  }

  render() {
    return (
      <div>
        This is a sample component 2. {this.props.rootReducer.data}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      rootReducer: state.rootReducer
    };
}

export default connect(mapStateToProps, actions)(Sample2);

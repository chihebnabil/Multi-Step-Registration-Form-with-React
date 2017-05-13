import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class MainContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div></div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state
  };
}

export default connect(mapStateToProps)(MainContainer);
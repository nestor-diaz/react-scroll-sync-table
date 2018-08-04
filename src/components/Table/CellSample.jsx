import React, { Component } from 'react';

class CellSample extends Component {
  render() {
    const { collapsed } = this.props;

    return <div> Is collapsed: {`${collapsed}`}</div>;
  }
}

export default CellSample;

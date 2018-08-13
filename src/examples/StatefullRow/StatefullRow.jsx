import React, { Component } from 'react';
import Row from '../../components/Row';

const CollapsibleCell = ({ isCollapsed }) => (
  <div>Collapsed: {`${isCollapsed}`}</div>
);

class StatefullRow extends Component {
  state = {
    isCollapsed: false,
  };

  handleOnCollapse = () =>
    this.setState({ isCollapsed: !this.state.isCollapsed });

  render() {
    const { columns } = this.props;
    const { isCollapsed } = this.state;

    return (
      <Row
        className="row"
        cellClassName="cell"
        columns={columns}
        rowData={{
          columnA: <div onClick={this.handleOnCollapse}>Collapse!</div>,
          columnB: <CollapsibleCell isCollapsed={isCollapsed} />,
        }}
      />
    );
  }
}

export default StatefullRow;

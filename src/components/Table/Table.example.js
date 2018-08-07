/* eslint-disable react/jsx-filename-extension */
import React, { PureComponent } from 'react';
import Table from './Table';
import Row from '../Row';
import CellSample from './CellSample';
import './Table.example.css';

class TableExample extends PureComponent {
  state = {
    isCollapsed: true,
  };

  handleOnCollapsed = () => {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  };

  columnHeaderRenderer = ({ label }) => label;

  render() {
    const { isCollapsed } = this.state;
    const columns = [{
      dataKey: 'a',
      label: 'a',
      stickyAlign: 'left',
      width: '50',
    }, {
      dataKey: 'b',
      label: 'b',
      width: '150',
    }, {
      dataKey: 'c',
      label: 'c',
      width: '150',
    }, {
      dataKey: 'd',
      label: 'd',
      width: '150',
    }, {
      dataKey: 'e',
      label: 'e',
      width: '150',
    }, {
      dataKey: 'f',
      label: 'f',
      width: '150',
    }, {
      dataKey: 'g',
      label: 'g',
      width: '150',
    }, {
      dataKey: 'h',
      label: 'h',
      width: '50',
      stickyAlign: 'right',
    }];

    return (
      <div>
        <div onClick={this.handleOnCollapsed}>Collapse</div>
        <Table
          columns={columns}
          columnHeaderRenderer={this.columnHeaderRenderer}
          columnClassName="column"
          headerRowClassName="headerRow"
          headerColumnClassName="headerColumn"
          tableClassName="table"
          rowClassName="row"
          stickHeader>
          <Row
            rowData={{
              a: <CellSample collapsed={isCollapsed} />,
              b: 'A / B',
              c: 'A / D',
              g: 'A / H',
            }}
          />
          <Row
            rowData={{
              a: 'B / A',
              b: 'B / B',
              c: 'B / C',
            }}
          />
          <Row
            rowData={{
              a: 'C / A',
              b: 'C / B',
              c: 'C / C',
            }}
          />
          <Row
            rowData={{
              a: 'D / A',
              b: 'D / B',
              c: 'D / C',
            }}
          />
        </Table>
      </div>
    );
  }
}

export default TableExample;

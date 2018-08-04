import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BaseRow from '../Row/BaseRow';

class Body extends Component {
  state = {
    scrollLeft: 0,
  };

  handleScrollEvent = ({ scrollLeft }) => {
    this.setState({ scrollLeft });
  };

  buildHeaderRowData = () => {
    const headerRowData = {};
    const { columns, columnHeaderRenderer } = this.props;

    columns.forEach((column) => {
      headerRowData[column.dataKey] =
        columnHeaderRenderer ? columnHeaderRenderer({ ...column }) : column.label;
    });

    return headerRowData;
  };

  render() {
    const {
      columns,
      columnClassName,
      headerRowClassName,
      headerColumnClassName,
      rows,
      rowClassName,
      stickHeader
    } = this.props;
    const { scrollLeft } = this.state;

    return (
      <Fragment>
        <BaseRow
          columns={columns}
          columnClassName={headerColumnClassName}
          className={headerRowClassName}
          isSticky={stickHeader}
          isHeader
          onScroll={this.handleScrollEvent}
          rowId={BaseRow.HEADER_ROW_ID}
          rowData={this.buildHeaderRowData()}
          scrollLeft={scrollLeft}
        />
        {rows.map((row, rowIndex) =>
          <BaseRow
            columns={columns}
            columnClassName={columnClassName}
            className={rowClassName}
            key={rowIndex}
            onScroll={this.handleScrollEvent}
            rowId={rowIndex + 1}
            rowData={row.props.rowData}
            scrollLeft={scrollLeft}
          />
        )}
      </Fragment>
    );
  }
}

Body.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  columnHeaderRenderer: PropTypes.func,
  columnClassName: PropTypes.any,
  headerRowClassName: PropTypes.any,
  headerColumnClassName: PropTypes.any,
  rows: PropTypes.array.isRequired,
  rowClassName: PropTypes.any,
  stickHeader: PropTypes.bool,
};

Body.defaultProps = {
  columns: [],
  columnHeaderRenderer: null,
  columnClassName: '',
  headerRowClassName: '',
  headerColumnClassName: '',
  rows: [],
  rowClassName: '',
  stickHeader: false,
};

export default Body;

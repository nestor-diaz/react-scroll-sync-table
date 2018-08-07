import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollSyncBody from '../ScrollSyncBody';
import ScrollSyncColumns from '../ScrollSyncColumns';
import ScrollSyncRows from '../ScrollSyncRows';

class ScrollSyncTable extends Component {
  tableDefaultStyles = {
    height: 'auto',
    width: '100%',
  };

  getColumns = () => {
    const { children } = this.props;
    const columns = children.find(child => child.type === ScrollSyncColumns);

    return React.Children.toArray(columns.props.children);
  };

  getRows = () => {
    const { children } = this.props;
    const rows = children.find(child => child.type === ScrollSyncRows);

    return React.Children.toArray(rows.props.children);
  };

  getRowsAndColumns = () => {
    if (React.Children.count(this.props.children) !== 2) {
      return { columns: [], rows: [] };
    }

    return {
      columns: this.getColumns(),
      rows: this.getRows(),
    };
  };

  render() {
    const {
      columnHeaderRenderer,
      columnClassName,
      headerRowClassName,
      headerColumnClassName,
      tableClassName,
      rowClassName,
      stickHeader,
    } = this.props;

    return (
      <div className={tableClassName} style={this.tableDefaultStyles}>
        <ScrollSyncBody
          columnHeaderRenderer={columnHeaderRenderer}
          columnClassName={columnClassName}
          headerRowClassName={headerRowClassName}
          headerColumnClassName={headerColumnClassName}
          rowClassName={rowClassName}
          stickHeader={stickHeader}
          {...this.getRowsAndColumns()}
        />
      </div>
    );
  }
}

ScrollSyncTable.propTypes = {
  /** The class name to be applied to the table columns */
  columnClassName: PropTypes.any,

  /** The class name to be applied to the header row */
  headerRowClassName: PropTypes.any,

  /** The class name to be applied to each header column */
  headerColumnClassName: PropTypes.any,

  /** The class name to be applied to the table */
  tableClassName: PropTypes.any,

  /** The class name to be applied to the table rows */
  rowClassName: PropTypes.any,

  /** Whether you want a sticky header or not */
  stickHeader: PropTypes.bool,
};

ScrollSyncTable.defaultProps = {
  columnClassName: '',
  headerRowClassName: '',
  headerColumnClassName: '',
  tableClassName: '',
  rowClassName: '',
  stickHeader: false,
};

export default ScrollSyncTable;

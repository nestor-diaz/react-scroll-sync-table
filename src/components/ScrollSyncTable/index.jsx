import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ScrollSyncBody from '../ScrollSyncBody';
import ScrollSyncColumns from '../ScrollSyncColumns';
import ScrollSyncRows from '../ScrollSyncRows';

class ScrollSyncTable extends PureComponent {
  tableDefaultStyles = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    height: 'auto',
    width: '100%',
  };

  constructor(props) {
    super(props);

    this.childrenArray = React.Children.toArray(props.children);
  }

  getColumns = () => {
    const columns = this.childrenArray.find(
      child => child.type === ScrollSyncColumns
    );

    return React.Children.toArray(columns.props.children) || [];
  };

  getRows = () => {
    const rows = this.childrenArray.find(
      child => child.type === ScrollSyncRows
    );

    return React.Children.toArray(rows.props.children) || [];
  };

  extractRowsAndColumns = () => {
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
      stickHeader,
      tableClassName,
      rowClassName,
      columnClassName,
      headerClassName,
      headerColumnClassName,
    } = this.props;

    return (
      <div className={tableClassName} style={this.tableDefaultStyles}>
        <ScrollSyncBody
          stickHeader={stickHeader}
          rowClassName={rowClassName}
          columnClassName={columnClassName}
          headerClassName={headerClassName}
          headerColumnClassName={headerColumnClassName}
          {...this.extractRowsAndColumns()}
        />
      </div>
    );
  }
}

ScrollSyncTable.propTypes = {
  /** Whether you want a sticky header or not */
  stickHeader: PropTypes.bool,

  /** The class name to be applied to the table */
  tableClassName: PropTypes.any,

  /** The class name to be applied to the table rows */
  rowClassName: PropTypes.any,

  /** The class name to be applied to the table columns */
  columnClassName: PropTypes.any,

  /** The class name to be applied to the header row */
  headerClassName: PropTypes.any,

  /** The class name to be applied to the header columns */
  headerColumnClassName: PropTypes.any,
};

ScrollSyncTable.defaultProps = {
  stickHeader: false,
  tableClassName: '',
  rowClassName: '',
  columnClassName: '',
  headerClassName: '',
  headerColumnClassName: '',
};

export default ScrollSyncTable;

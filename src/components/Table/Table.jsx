import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Body from '../Body';
import Row from '../Row';

class Table extends PureComponent {
  tableDefaultStyles = {
    height: 'auto',
    width: '100%',
  };

  getRowsAndColumns = () => {
    const { columns = [], children = [] } = this.props;
    const rows = children.filter(child => child.type === Row);

    return { columns, rows };
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
        <Body
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

Table.propTypes = {
  /** A set of columns specification */
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,

  /** A function that will be called to render header columns */
  columnHeaderRenderer: PropTypes.func,

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

Table.defaultProps = {
  columnHeaderRenderer: null,
  columnClassName: '',
  headerRowClassName: '',
  headerColumnClassName: '',
  tableClassName: '',
  rowClassName: '',
  stickHeader: false,
};

export default Table;

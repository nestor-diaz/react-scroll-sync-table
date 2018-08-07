import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import ScrollSyncRow from '../ScrollSyncRows/ScrollSyncRow';

class ScrollSyncBody extends PureComponent {
  state = {
    scrollLeft: 0,
  };

  handleScrollEvent = ({ scrollLeft }) => {
    this.setState({ scrollLeft });
  };

  renderHeaderRow = () => {
    const {
      columns,
      stickHeader,
      headerClassName,
      headerColumnClassName,
    } = this.props;
    const { scrollLeft } = this.state;

    return (
      <ScrollSyncRow
        columns={columns}
        className={headerClassName}
        columnClassName={headerColumnClassName}
        isSticky={stickHeader}
        isHeader
        key="header"
        onScroll={this.handleScrollEvent}
        rowId={ScrollSyncRow.HEADER_ROW_ID}
        scrollLeft={scrollLeft}
      />
    );
  };

  injectPropsToRow = (row, props) => (
    <Fragment key={props.key}>{React.cloneElement(row, props)}</Fragment>
  );

  render() {
    const { rows, columns, rowClassName, columnClassName } = this.props;
    const { scrollLeft } = this.state;

    return (
      <Fragment>
        <Fragment key="0">{this.renderHeaderRow()}</Fragment>
        {rows.map((row, rowIndex) =>
          this.injectPropsToRow(row, {
            key: row.props.name || rowIndex,
            rowId: rowIndex + 1,
            onScroll: this.handleScrollEvent,
            className: rowClassName,
            columnClassName,
            columns,
            scrollLeft,
            ...row.props,
          })
        )}
      </Fragment>
    );
  }
}

ScrollSyncBody.propTypes = {
  /** The rows to be rendered in the table. An array of ScrollSyncRow */
  rows: PropTypes.array.isRequired,

  /**
   * The columns to be rendered for each row in the table.
   * An array of ScrollSyncColumn
   */
  columns: PropTypes.array.isRequired,

  /** Whether the table will have a sticky header or not */
  stickHeader: PropTypes.bool,

  /** The class name to be applied to the row */
  rowClassName: PropTypes.any,

  /** The class name to be applied to the columns */
  columnClassName: PropTypes.any,

  /** The class name to be applied to the header row */
  headerClassName: PropTypes.any,

  /** The class name to be applied to the header columns */
  headerColumnClassName: PropTypes.any,
};

ScrollSyncBody.defaultProps = {
  rows: [],
  columns: [],
  stickHeader: false,
  rowClassName: '',
  columnClassName: '',
  headerClassName: '',
  headerColumnClassName: '',
};

export default ScrollSyncBody;

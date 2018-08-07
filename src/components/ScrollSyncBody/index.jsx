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
      headerRowClassName,
      headerColumnClassName,
    } = this.props;
    const { scrollLeft } = this.state;

    return (
      <ScrollSyncRow
        columns={columns}
        className={headerRowClassName}
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
            isHeader: false,
            scrollLeft,
            ...row.props,
          })
        )}
      </Fragment>
    );
  }
}

ScrollSyncBody.propTypes = {
  columns: PropTypes.array.isRequired,
  columnClassName: PropTypes.any,
  headerRowClassName: PropTypes.any,
  headerColumnClassName: PropTypes.any,
  rows: PropTypes.array.isRequired,
  stickHeader: PropTypes.bool,
  rowClassName: PropTypes.any,
};

ScrollSyncBody.defaultProps = {
  columns: [],
  columnClassName: '',
  headerRowClassName: '',
  headerColumnClassName: '',
  rows: [],
  rowClassName: '',
  stickHeader: false,
};

export default ScrollSyncBody;

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import ScrollSyncRow from '../ScrollSyncRows/ScrollSyncRow';

class ScrollSyncBody extends PureComponent {
  state = {
    scrollLeft: 0,
    rowBeingScrolled: null,
  };

  handleScrollEvent = (
    { isScrollingOnSameRow, rowBeingScrolled, scrollLeft },
    scrollEventCallback
  ) => {
    scrollEventCallback();

    if (isScrollingOnSameRow) {
      this.setState({ scrollLeft });
    } else {
      this.setState({ rowBeingScrolled, scrollLeft });
    }
  };

  renderHeaderRow = () => {
    const { columns, stickHeader } = this.props;
    const { rowBeingScrolled, scrollLeft } = this.state;

    return (
      <ScrollSyncRow
        key="header"
        rowId={ScrollSyncRow.HEADER_ROW_ID}
        isSticky={stickHeader}
        onScroll={this.handleScrollEvent}
        columns={columns}
        rowBeingScrolled={rowBeingScrolled}
        scrollLeft={scrollLeft}
        isHeader
      />
    );
  };

  injectPropsToRow = (row, props) => (
    <Fragment key={props.key}>{React.cloneElement(row, props)}</Fragment>
  );

  render() {
    const { rows, columns } = this.props;
    const { rowBeingScrolled, scrollLeft } = this.state;

    return (
      <Fragment>
        <Fragment key="0">{this.renderHeaderRow()}</Fragment>
        {rows.map((row, rowIndex) =>
          this.injectPropsToRow(row, {
            key: row.props.name || rowIndex,
            rowId: rowIndex + 1,
            onScroll: this.handleScrollEvent,
            columns,
            rowBeingScrolled,
            scrollLeft,
            ...row.props,
          })
        )}
      </Fragment>
    );
  }
}

ScrollSyncBody.defaultProps = {
  rows: [],
  columns: [],
};

ScrollSyncBody.propTypes = {
  /** An array of ScrollSyncRow */
  rows: PropTypes.array.isRequired,

  /** An array of ScrollSyncColumn */
  columns: PropTypes.array.isRequired,
};

export default ScrollSyncBody;

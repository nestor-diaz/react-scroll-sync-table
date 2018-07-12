import React, { PureComponent } from 'react';

class ScrollSyncBody extends PureComponent {
  state = {
    scrollLeft: 0,
    rowBeingScrolled: null
  };

  handleScrollEvent = ({ isScrollingOnSameRow, rowBeingScrolled, scrollLeft }, scrollEventCallback) => {
    scrollEventCallback();

    if (isScrollingOnSameRow) {
      this.setState({ scrollLeft });
    } else {
      this.setState({ rowBeingScrolled, scrollLeft });
    }
  };

  render() {
    const { rows, columns } = this.props;
    const { rowBeingScrolled, scrollLeft } = this.state;

    return rows.map((row, rowIndex) =>
      injectPropsToRow(row, {
        key: row.props.name || rowIndex,
        rowId: rowIndex,
        onScroll: this.handleScrollEvent,
        columns,
        rowBeingScrolled,
        scrollLeft,
        ...row.props
      })
    );
  }
}

function injectPropsToRow(row, props) {
  return (
    <div key={props.key}>{ React.cloneElement(row, props) }</div>
  );
}

export default ScrollSyncBody;

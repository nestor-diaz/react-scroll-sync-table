import React, { PureComponent } from 'react';
import FlexyRow from '../FlexyRow';

class FlexyTableBody extends PureComponent {
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

    return rows.map((row, rowIndex) => (
      <FlexyRow
        rowId={rowIndex}
        key={row.name}
        columns={columns}
        rowBeingScrolled={rowBeingScrolled}
        scrollLeft={scrollLeft}
        onScroll={this.handleScrollEvent}
        {...row}
      />)
    );
  }
}

export default FlexyTableBody;

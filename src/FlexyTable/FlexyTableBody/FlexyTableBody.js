import React, { PureComponent } from 'react';
import FlexyRow from '../FlexyRow';

class FlexyTableBody extends PureComponent {
  state = {
    scrollLeft: 0,
    rowBeingScrolled: null,
    isScrolling: false,
  };

  handleScrollEvent = ({ isScrollingOnSameRow, rowBeingScrolled, scrollLeft, isScrolling }, scrollEventCallback) => {
    scrollEventCallback();

    console.log(isScrolling);

    if (isScrollingOnSameRow) {
      this.setState({ scrollLeft, isScrolling });
    } else {
      this.setState({ rowBeingScrolled, scrollLeft, isScrolling });
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

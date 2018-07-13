import React, { PureComponent } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './ScrollableSection.css';

class ScrollableSection extends PureComponent {
  rowId = -1;

  constructor(props) {
    super(props);

    this.rowId = props.rowId;

    this.setScrollableAreaRef = element => (this.scrollableArea = element);
  }

  componentDidUpdate() {
    this.preventChangingCurrentRow = true;
    this.scrollableArea.scrollLeft(this.props.scrollLeft);
  }

  handleOnScrollSection = () => {
    const scrollLeft = this.scrollableArea.getScrollLeft();

    this.props.onScroll(
      {
        isScrollingOnSameRow: this.preventChangingCurrentRow,
        rowBeingScrolled: this.rowId,
        scrollLeft,
      },
      () => {
        this.preventChangingCurrentRow = false;
      }
    );
  };

  renderScrollView = ({ style, ...props }) => {
    const isScrollingCurrentRow = this.rowId === this.props.rowBeingScrolled;
    const showScrollTracks = { marginBottom: '0' };
    const hideScrollTracks = { marginBottom: '-18px' };
    const customStyles = isScrollingCurrentRow
      ? showScrollTracks
      : hideScrollTracks;

    return (
      <div
        style={{ ...style, ...hideScrollTracks, ...customStyles }}
        className="scrollableSection"
        {...props}
      />
    );
  };

  render() {
    const { columns } = this.props;

    return (
      <div className="scrollAreaWrapper">
        <Scrollbars
          className="scrollBars"
          renderView={this.renderScrollView}
          onScroll={this.handleOnScrollSection}
          ref={this.setScrollableAreaRef}>
          {columns.map(column => <div key={column.props.name}>{column}</div>)}
        </Scrollbars>
      </div>
    );
  }
}

export default ScrollableSection;

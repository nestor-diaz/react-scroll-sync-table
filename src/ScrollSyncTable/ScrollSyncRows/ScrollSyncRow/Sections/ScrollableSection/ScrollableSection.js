import React, { PureComponent } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './ScrollableSection.css';

class ScrollableSection extends PureComponent {
  rowId = -1;

  constructor(props) {
    super(props);

    this.rowId = props.rowId;

    this.setScrollableAreaRef = (element) => {
      this.scrollableArea = element;
    };
  }

  componentDidUpdate() {
    this.preventChangingCurrentRow = true;
    this.scrollableArea.scrollLeft(this.props.scrollLeft);
  }

  onScrollSection = () => {
    const scrollLeft = this.scrollableArea.getScrollLeft();
    this.scrollableArea.hideTracks();

    this.props.onScroll({
      isScrollingOnSameRow: this.preventChangingCurrentRow,
      rowBeingScrolled: this.rowId,
      scrollLeft
    }, () => {
      this.preventChangingCurrentRow = false;
    });
  };

  renderScrollView = ({ style, ...props }) => {
    const isScrollingCurrentRow = (this.rowId === this.props.rowBeingScrolled);
    const showScrollTracks = { marginBottom: '0' };
    const hideScrollTracks = { marginBottom: '-18px' };
    const customStyles = isScrollingCurrentRow ? showScrollTracks : hideScrollTracks;

    return (<div {...props} style={{ ...style, ...hideScrollTracks, ...customStyles }} className="scrollableSection"></div>);
  };

  render() {
    const { columns } = this.props;

    return (
      <div className="scrollAreaWrapper">
        <Scrollbars
          className="scrollBars"
          renderView={this.renderScrollView}
          onScroll={this.onScrollSection}
          ref={this.setScrollableAreaRef}
        >
          { columns.map((column) => (<div key={column.props.name}>{ column }</div>)) }
        </Scrollbars>
      </div>
    );
  }
};

export default ScrollableSection;

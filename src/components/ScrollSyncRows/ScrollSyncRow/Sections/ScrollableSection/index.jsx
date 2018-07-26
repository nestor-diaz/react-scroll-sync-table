import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

const defaultWrapperStyle = {
  flex: '1 1 auto',
};
const defaultSectionStyle = {
  display: 'flex',
};

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
        style={{
          ...style,
          ...hideScrollTracks,
          ...customStyles,
          ...defaultSectionStyle,
        }}
        {...props}
      />
    );
  };

  render() {
    const { columns } = this.props;

    return (
      <div style={defaultWrapperStyle}>
        <Scrollbars
          renderView={this.renderScrollView}
          onScroll={this.handleOnScrollSection}
          ref={this.setScrollableAreaRef}>
          {columns.map(column => column)}
        </Scrollbars>
      </div>
    );
  }
}

ScrollableSection.propTypes = {
  columns: PropTypes.array.isRequired,
  onScroll: PropTypes.func,
};

ScrollableSection.defaultProps = {
  onScroll: () => {},
};

export default ScrollableSection;

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

const defaultWrapperStyle = {
  flex: '1 1 auto',
};
const defaultSectionStyle = {
  display: 'flex',
};

/* eslint-disable react/no-array-index-key */

class ScrollableSection extends Component {
  rowId = -1;
  state = {
    showScrollTrack: false,
  };

  constructor(props) {
    super(props);

    this.rowId = props.rowId;

    this.setScrollableAreaRef = element => (this.scrollableArea = element);
  }

  componentDidUpdate() {
    this.scrollableArea.scrollLeft(this.props.scrollLeft);
  }

  handleOnMouseEnter = () => this.setState({ showScrollTrack: true });

  handleOnMouseLeave = () => this.setState({ showScrollTrack: false });

  handleOnScrollSection = () => {
    const scrollLeft = this.scrollableArea.getScrollLeft();

    this.props.onScroll({ scrollLeft });
  };

  renderScrollView = ({ style, ...props }) => {
    const { showScrollTrack } = this.state;
    const showScrollTracks = { marginBottom: '0' };
    const hideScrollTracks = { marginBottom: '-18px' };
    const customStyles = showScrollTrack ? showScrollTracks : hideScrollTracks;

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
    const { cells } = this.props;

    return (
      <div
        id="scrollable-wrapper"
        style={defaultWrapperStyle}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}>
        <Scrollbars
          renderView={this.renderScrollView}
          onScroll={this.handleOnScrollSection}
          ref={this.setScrollableAreaRef}>
          {cells.map((cell, index) => (
            <Fragment key={`scrollSection-${index}`}>{cell}</Fragment>
          ))}
        </Scrollbars>
      </div>
    );
  }
}

ScrollableSection.propTypes = {
  cells: PropTypes.array.isRequired,
  onScroll: PropTypes.func,
};

ScrollableSection.defaultProps = {
  onScroll: () => {},
};

export default ScrollableSection;

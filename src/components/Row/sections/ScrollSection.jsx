import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-multi-comp */

const defaultWrapperStyle = {
  flex: '1 1 auto',
  position: 'relative',
};
const defaultSectionStyle = {
  display: 'flex',
};
const defaultScrollRightIndicatorStyle = {
  height: '100%',
  position: 'absolute',
  right: 0,
  width: '20px',
  backgroundImage:
    'linear-gradient(to right, rgba(202, 203, 204, 0), rgba(202, 203, 204, 1))',
};
const defaultScrollLeftIndicatorStyle = {
  height: '100%',
  position: 'absolute',
  left: 0,
  width: '20px',
  backgroundImage:
    'linear-gradient(to left, rgba(202, 203, 204, 0), rgba(202, 203, 204, 1))',
};

class ScrollSection extends PureComponent {
  state = {
    showScrollTrack: false,
  };

  componentDidMount() {
    const { rowId, registerScrollSectionElements, onScroll } = this.props;

    registerScrollSectionElements(rowId, {
      scrollableArea: this.scrollableAreaRef,
      scrollRightIndicator: this.scrollRightIndicatorRef,
      scrollLeftIndicator: this.scrollLeftIndicatorRef,
    });

    // Call this once on mount to initialize the Table state.
    if (this.scrollableAreaRef) {
      onScroll(this.scrollableAreaRef.getValues());
    }
  }

  handleOnMouseEnter = () => this.setState({ showScrollTrack: true });

  handleOnMouseLeave = () => this.setState({ showScrollTrack: false });

  handleOnScroll = () =>
    this.props.onScroll(this.scrollableAreaRef.getValues());

  renderScrollView = ({ style, ...props }) => {
    const { showScrollTrack } = this.state;
    const showXScrollTrack = { overflowX: 'scroll' };
    const hideXScrollTrack = { overflowX: 'hidden' };
    const customStyles = showScrollTrack ? showXScrollTrack : hideXScrollTrack;

    return (
      <div
        style={{
          ...style,
          ...defaultSectionStyle,
          ...customStyles,
        }}
        {...props}
      />
    );
  };

  setScrollableAreaRef = element => (this.scrollableAreaRef = element);

  setScrollRightIndicatorRef = element =>
    (this.scrollRightIndicatorRef = element);

  setScrollLeftIndicatorRef = element =>
    (this.scrollLeftIndicatorRef = element);

  render() {
    const { cells, showScrollIndicators } = this.props;
    const scrollRightIndicatorStyle = showScrollIndicators
      ? defaultScrollRightIndicatorStyle
      : {};
    const scrollLeftIndicatorStyle = showScrollIndicators
      ? defaultScrollLeftIndicatorStyle
      : {};

    return (
      <div
        id="scrollable-wrapper"
        style={defaultWrapperStyle}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}>
        <div
          ref={this.setScrollRightIndicatorRef}
          style={scrollRightIndicatorStyle}
        />
        <div
          ref={this.setScrollLeftIndicatorRef}
          style={scrollLeftIndicatorStyle}
        />
        <Scrollbars
          ref={this.setScrollableAreaRef}
          renderView={this.renderScrollView}
          onScroll={this.handleOnScroll}>
          {cells.map((cell, index) => (
            <Fragment key={`scrollCell-${index}`}>{cell}</Fragment>
          ))}
        </Scrollbars>
      </div>
    );
  }
}

ScrollSection.propTypes = {
  cells: PropTypes.array,
  onScroll: PropTypes.func,
  registerScrollSectionElements: PropTypes.func,
  showScrollIndicators: PropTypes.bool,
};

ScrollSection.defaultProps = {
  cells: [],
  onScroll: () => {},
  registerScrollSectionElements: () => {},
  showScrollIndicators: true,
};

export default ScrollSection;

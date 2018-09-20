import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-multi-comp */

const defaultScrollWrapperStyle = {
  flex: '1 1 auto',
  position: 'relative',
};
const defaultScrollSectionStyle = {
  display: 'flex',
  overflowX: 'hidden',
  overflowY: 'hidden',
};
const defaultLeftScrollArrowWrapperStyle = {
  position: 'absolute',
  left: 0,
  height: '100%',
};
const defaultRightScrollArrowWrapperStyle = {
  position: 'absolute',
  right: 0,
  height: '100%',
};

class ScrollSection extends PureComponent {
  state = {
    shouldShowScrollArrows: false,
    enableLeftScrollArrow: false,
    enableRightScrollArrow: false,
  };

  componentDidMount() {
    const { rowId, registerScrollSectionElements } = this.props;

    registerScrollSectionElements(rowId, {
      scrollableArea: this.scrollableAreaRef,
      updateScrollArrows: this.shouldEnableScrollArrows.bind(this),
    });

    if (this.scrollableAreaRef) {
      this.shouldEnableScrollArrows();
    }
  }

  renderScrollView = ({ style, ...props }) => (
    <div
      style={{
        ...style,
        ...defaultScrollSectionStyle,
      }}
      {...props}
    />
  );

  setScrollableAreaRef = element => (this.scrollableAreaRef = element);

  handleOnScroll = direction => {
    this.props.onScroll({
      columnWidths: this.props.columnWidths,
      scrollValues: this.scrollableAreaRef.getValues(),
      direction,
    });

    this.shouldEnableScrollArrows();
  };

  renderScrollArrows = () => {
    const { enableLeftScrollArrow, enableRightScrollArrow } = this.state;
    const {
      leftArrowWrapperClassName,
      rightArrowWrapperClassName,
      leftArrowRenderer,
      rightArrowRenderer,
    } = this.props;

    return (
      <Fragment>
        <div
          className={leftArrowWrapperClassName}
          style={defaultLeftScrollArrowWrapperStyle}>
          <div id="scrollLeft" onClick={() => this.handleOnScroll('left')}>
            {leftArrowRenderer({ isEnabled: enableLeftScrollArrow })}
          </div>
        </div>
        <div
          className={rightArrowWrapperClassName}
          style={defaultRightScrollArrowWrapperStyle}>
          <div id="scrollRight" onClick={() => this.handleOnScroll('right')}>
            {rightArrowRenderer({ isEnabled: enableRightScrollArrow })}
          </div>
        </div>
      </Fragment>
    );
  };

  shouldEnableScrollArrows = () => {
    const {
      clientWidth,
      scrollWidth,
      left,
    } = this.scrollableAreaRef.getValues();
    const shouldShowScrollArrows = scrollWidth > clientWidth;
    const enableLeftScrollArrow = left > 0;
    const enableRightScrollArrow = left < 1;

    this.setState({
      shouldShowScrollArrows,
      enableLeftScrollArrow,
      enableRightScrollArrow,
    });
  };

  render() {
    const { shouldShowScrollArrows } = this.state;
    const { cells, showScrollArrows } = this.props;

    return (
      <div style={defaultScrollWrapperStyle}>
        {showScrollArrows &&
          shouldShowScrollArrows &&
          this.renderScrollArrows()}
        <Scrollbars
          ref={this.setScrollableAreaRef}
          renderView={this.renderScrollView}>
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
  columnWidths: PropTypes.array,
  onScroll: PropTypes.func,
  registerScrollSectionElements: PropTypes.func,
  showScrollArrows: PropTypes.bool,
  leftArrowWrapperClassName: PropTypes.any,
  rightArrowWrapperClassName: PropTypes.any,
  leftArrowRenderer: PropTypes.func,
  rightArrowRenderer: PropTypes.func,
};

ScrollSection.defaultProps = {
  cells: [],
  columnWidths: [],
  onScroll: () => {},
  registerScrollSectionElements: () => {},
  showScrollArrows: true,
  leftArrowWrapperClassName: '',
  rightArrowWrapperClassName: '',
  leftArrowRenderer: () => {},
  rightArrowRenderer: () => {},
};

export default ScrollSection;

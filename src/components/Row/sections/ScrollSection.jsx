import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-multi-comp */

const defaultWrapperStyle = {
  flex: '1 1 auto',
};
const defaultSectionStyle = {
  display: 'flex',
};

class ScrollSection extends PureComponent {
  state = {
    showScrollTrack: false,
  };

  handleOnMouseEnter = () => this.setState({ showScrollTrack: true });

  handleOnMouseLeave = () => this.setState({ showScrollTrack: false });

  handleOnScroll = () =>
    this.props.onScroll({ left: this.scrollableArea.getScrollLeft() });

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

  setScrollableAreaRef = element => {
    const { rowId, registerScrollSection } = this.props;

    this.scrollableArea = element;

    registerScrollSection(rowId, this.scrollableArea);
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
  registerScrollSection: PropTypes.func,
};

ScrollSection.defaultProps = {
  cells: [],
  onScroll: () => {},
  registerScrollSection: () => {},
};

export default ScrollSection;

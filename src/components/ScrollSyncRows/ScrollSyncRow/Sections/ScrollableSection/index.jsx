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
    const { columns } = this.props;

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

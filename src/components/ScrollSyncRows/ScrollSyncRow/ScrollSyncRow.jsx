import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  LeftStickySection,
  RightStickySection,
  ScrollableSection,
} from './sections';

const defaultRowStyle = {
  display: 'flex',
  overflow: 'hidden',
  minHeight: '50px',
};
const stickyStyle = {
  position: 'sticky',
  top: '0',
  zIndex: '1000',
};
const cellDefaultStyles = width => ({
  width,
  flex: `0 0 ${width}`,
});

class ScrollSyncRow extends PureComponent {
  static DEFAULT_COLUMN_WIDTH = 50;
  static HEADER_ROW_ID = 0;
  static NOT_SPECIFY_COLUMN_VALUE = 'Not Column';

  rowId = -1;

  constructor(props) {
    super(props);

    this.rowId = Number(props.rowId);
  }

  state = {
    leftStickySection: [],
    rightStickySection: [],
    scrollableSection: [],
  };

  static getDerivedStateFromProps({
    columns,
    children = [],
    columnClassName,
    isHeader,
  }) {
    const leftStickySection = [];
    const rightStickySection = [];
    const scrollableSection = [];

    columns.forEach(column => {
      const {
        dataKey = '',
        width = ScrollSyncRow.DEFAULT_COLUMN_WIDTH,
        stickyAlign,
      } = column.props;
      const cellContent = isHeader
        ? column.props.children
        : React.Children.toArray(children).find(
            cell => cell.props.column === dataKey
          );
      const styles = cellDefaultStyles(width);
      const cell = (
        <div className={columnClassName} style={styles}>
          {cellContent}
        </div>
      );

      switch (stickyAlign) {
        case 'left':
          leftStickySection.push(cell);
          break;
        case 'right':
          rightStickySection.push(cell);
          break;
        default:
          scrollableSection.push(cell);
          break;
      }
    });

    return {
      leftStickySection,
      rightStickySection,
      scrollableSection,
    };
  }

  render() {
    const { isSticky, scrollLeft, onScroll, className } = this.props;
    const {
      leftStickySection,
      rightStickySection,
      scrollableSection,
    } = this.state;
    const stickyStyleProps = isSticky ? stickyStyle : {};
    const styles = {
      ...defaultRowStyle,
      ...stickyStyleProps,
    };

    return (
      <div className={className} style={styles}>
        <LeftStickySection cells={leftStickySection} />
        <ScrollableSection
          rowId={this.rowId}
          cells={scrollableSection}
          onScroll={onScroll}
          scrollLeft={scrollLeft}
        />
        <RightStickySection cells={rightStickySection} />
      </div>
    );
  }
}

ScrollSyncRow.propTypes = {
  columns: PropTypes.array,
  className: PropTypes.any,
};

ScrollSyncRow.defaultProps = {
  className: '',
};

export default ScrollSyncRow;

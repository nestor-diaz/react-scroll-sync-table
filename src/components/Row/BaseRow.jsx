import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  LeftSection,
  RightSection,
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
  width: `${width}px`,
  flex: `0 0 ${width}px`,
});

class BaseRow extends Component {
  static DEFAULT_COLUMN_WIDTH = 50;
  static HEADER_ROW_ID = 0;
  static NOT_SPECIFY_COLUMN_VALUE = 'Not Column';

  state = {
    leftStickySection: [],
    rightStickySection: [],
    scrollableSection: [],
  };

  static getDerivedStateFromProps({ columns, rowData, columnClassName }) {
    const leftStickySection = [];
    const rightStickySection = [];
    const scrollableSection = [];

    columns.forEach(column => {
      const columnWidth = column.width || BaseRow.DEFAULT_COLUMN_WIDTH;
      const columnDataKey = column.dataKey || '';
      const cellContent = rowData[columnDataKey] || '';
      const styles = cellDefaultStyles(columnWidth);
      const cell = (
        <div className={columnClassName} style={styles}>
          {cellContent}
        </div>
      );

      switch (column.stickyAlign) {
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
    const { className, isSticky, onScroll, rowId, scrollLeft } = this.props;
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
        <LeftSection cells={leftStickySection} />
        <ScrollableSection
          rowId={rowId}
          cells={scrollableSection}
          onScroll={onScroll}
          scrollLeft={scrollLeft}
        />
        <RightSection cells={rightStickySection} />
      </div>
    );
  }
}

BaseRow.propTypes = {
  columns: PropTypes.array,
  className: PropTypes.any,
  columnClassName: PropTypes.any,
  isSticky: PropTypes.bool,
  isHeader: PropTypes.bool,
  onScroll: PropTypes.func,
  rowId: PropTypes.number,
  rowData: PropTypes.object,
  scrollLeft: PropTypes.number,
};

BaseRow.defaultProps = {
  columns: [],
  className: '',
  columnClassName: '',
  isSticky: false,
  isHeader: false,
  onScroll: () => {},
  rowId: -1,
  rowData: {},
  scrollLeft: 0,
};

export default BaseRow;

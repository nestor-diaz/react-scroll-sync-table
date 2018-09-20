import React, { Component } from 'react';
import PropTypes from 'prop-types';
import idGenerator from 'react-id-generator';
import { extractColumnWidthFromStringValue } from '../../utils/columnUtils';
import { ScrollSection, RightSection, LeftSection } from './sections';
import ScrollContext from '../ScrollContext';

const defaultRowStyle = {
  display: 'flex',
};
const defaultCellStyle = width => ({
  width,
  flex: `0 0 ${width}`,
});

class Row extends Component {
  static DEFAULT_COLUMN_WIDTH = 50;

  state = {
    stickRightSection: [],
    stickLeftSection: [],
    scrollSection: [],
    scrollSectionColumnWidths: [],
  };

  constructor(props) {
    super(props);

    this.rowId = idGenerator();
  }

  static getDerivedStateFromProps({ columns, cellClassName, rowData }) {
    const stickLeftSection = [];
    const stickRightSection = [];
    const scrollSection = [];
    const scrollSectionColumnWidths = [];

    columns.forEach(column => {
      const columnDataKey = column.dataKey;
      const columnWidth = column.width || Row.DEFAULT_COLUMN_WIDTH;
      const cellContent = rowData[columnDataKey];
      const cell = (
        <div className={cellClassName} style={defaultCellStyle(columnWidth)}>
          {cellContent}
        </div>
      );
      const columnWidthInteger = extractColumnWidthFromStringValue(columnWidth);

      switch (column.stickAlign) {
        case 'right':
          stickRightSection.push(cell);
          break;
        case 'left':
          stickLeftSection.push(cell);
          break;
        default:
          scrollSectionColumnWidths.push(columnWidthInteger);
          scrollSection.push(cell);
          break;
      }
    });

    return {
      stickLeftSection,
      stickRightSection,
      scrollSection,
      scrollSectionColumnWidths,
    };
  }

  render() {
    const {
      stickLeftSection,
      stickRightSection,
      scrollSection,
      scrollSectionColumnWidths,
    } = this.state;
    const {
      className,
      showScrollArrows,
      leftArrowWrapperClassName,
      rightArrowWrapperClassName,
      leftArrowRenderer,
      rightArrowRenderer,
    } = this.props;

    return (
      <div className={className} style={defaultRowStyle}>
        <LeftSection cells={stickLeftSection} />
        <ScrollContext.Consumer>
          {({ registerScrollSectionElements, onScrollRow }) => (
            <ScrollSection
              key={`scrollSection-${this.rowId}`}
              cells={scrollSection}
              columnWidths={scrollSectionColumnWidths}
              onScroll={onScrollRow}
              registerScrollSectionElements={registerScrollSectionElements}
              rowId={this.rowId}
              showScrollArrows={showScrollArrows}
              leftArrowWrapperClassName={leftArrowWrapperClassName}
              rightArrowWrapperClassName={rightArrowWrapperClassName}
              leftArrowRenderer={leftArrowRenderer}
              rightArrowRenderer={rightArrowRenderer}
            />
          )}
        </ScrollContext.Consumer>
        <RightSection cells={stickRightSection} />
      </div>
    );
  }
}

Row.propTypes = {
  className: PropTypes.any,
  cellClassName: PropTypes.any,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string,
      stickAlign: PropTypes.string,
      width: PropTypes.string,
    })
  ),
  showScrollArrows: PropTypes.bool,
  rowData: PropTypes.object,
  leftArrowWrapperClassName: PropTypes.any,
  rightArrowWrapperClassName: PropTypes.any,
  leftArrowRenderer: PropTypes.func,
  rightArrowRenderer: PropTypes.func,
};

Row.defaultProps = {
  className: '',
  cellClassName: '',
  columns: [],
  showScrollArrows: true,
  rowData: {},
  leftArrowWrapperClassName: '',
  rightArrowWrapperClassName: '',
  leftArrowRenderer: () => {},
  rightArrowRenderer: () => {},
};

export default Row;

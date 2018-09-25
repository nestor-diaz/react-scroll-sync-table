import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import ScrollContext from '../ScrollContext';
import {
  getColumnWidthRanges,
  findColumnWidthRange,
} from '../../utils/columnUtils';

const defaultStyle = {
  display: 'flex',
  flexDirection: 'column',
};

class Table extends Component {
  scrollSectionElements = new Map();

  handleOnScrollRow = ({ columnWidths = [], scrollValues, direction }) => {
    if (direction === 'right') {
      this.handleScrollRight({ columnWidths, scrollValues });
    } else {
      this.handleScrollLeft({ columnWidths, scrollValues });
    }
  };

  handleScrollRight = ({ columnWidths, scrollValues }) => {
    const { hScrollOffset } = this.props;
    const { clientWidth, scrollLeft } = scrollValues;
    const scrollLeftDisplacement = clientWidth + scrollLeft;
    const columnRanges = getColumnWidthRanges(columnWidths);
    const nextColumnToScroll = findColumnWidthRange(
      scrollLeftDisplacement,
      columnRanges,
      hScrollOffset,
      'right'
    );

    if (nextColumnToScroll.range) {
      const rangeCeil = nextColumnToScroll.range[1];
      const nextColumnOverflowWidth = Math.abs(
        rangeCeil - scrollLeftDisplacement
      );
      const offsetAmountUntilCurrentColumn =
        hScrollOffset * (nextColumnToScroll.column + 1);
      const scrollAccumulator =
        scrollLeft + nextColumnOverflowWidth + offsetAmountUntilCurrentColumn;

      this.scrollRows(scrollAccumulator);
    }
  };

  handleScrollLeft = ({ columnWidths, scrollValues }) => {
    const { hScrollOffset } = this.props;
    const { scrollLeft } = scrollValues;
    const columnRanges = getColumnWidthRanges(columnWidths);
    const prevColumnToScroll = findColumnWidthRange(
      scrollLeft,
      columnRanges,
      hScrollOffset,
      'left'
    );

    if (prevColumnToScroll.range) {
      const rangeFloor = prevColumnToScroll.range[0];
      const prevColumnOverflowWidth = Math.abs(rangeFloor - scrollLeft);
      const offsetAmountUntilCurrentColumn =
        hScrollOffset * (prevColumnToScroll.column + 1);
      const scrollAccumulator =
        scrollLeft - prevColumnOverflowWidth + offsetAmountUntilCurrentColumn;

      return this.scrollRows(scrollAccumulator);
    }
  };

  scrollRows = scrollLeft => {
    this.scrollSectionElements.forEach(scrollSectionElement => {
      const { scrollableArea, updateScrollArrows } = scrollSectionElement;

      scrollableArea.scrollLeft(scrollLeft);
      updateScrollArrows();
    });
  };

  registerScrollSectionElements = (rowId, elements) => {
    if (!this.scrollSectionElements.has(rowId)) {
      this.scrollSectionElements.set(rowId, elements);
    }
  };

  handleOnResize = () => {
    this.scrollSectionElements.forEach(scrollSectionElement => {
      const { updateScrollArrows } = scrollSectionElement;

      updateScrollArrows();
    });
  };

  render() {
    const { children, className } = this.props;

    return (
      <ReactResizeDetector
        handleWidth
        handleHeight
        onResize={this.handleOnResize}>
        <div className={className} style={defaultStyle}>
          <ScrollContext.Provider
            value={{
              onScrollRow: this.handleOnScrollRow,
              registerScrollSectionElements: this.registerScrollSectionElements,
            }}>
            {children}
          </ScrollContext.Provider>
        </div>
      </ReactResizeDetector>
    );
  }
}

Table.propTypes = {
  className: PropTypes.any,
  hScrollOffset: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Table.defaultProps = {
  className: '',
  hScrollOffset: 0,
};

export default Table;

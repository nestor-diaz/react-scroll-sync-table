import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollContext from '../ScrollContext';

const defaultStyle = {
  display: 'flex',
  flexDirection: 'column',
};

class Table extends Component {
  scrollSectionElements = new Map();

  handleOnScroll = scrollValues => {
    const { scrollLeft } = scrollValues;

    this.scrollSectionElements.forEach(scrollSectionElement => {
      const { scrollableArea } = scrollSectionElement;

      scrollableArea.scrollLeft(scrollLeft);
    });

    this.shouldShowScrollIndicators(scrollValues);
  };

  shouldShowScrollIndicators = scrollValues => {
    const { clientWidth, scrollWidth, left } = scrollValues;

    this.scrollSectionElements.forEach(scrollSectionElement => {
      const {
        scrollRightIndicator,
        scrollLeftIndicator,
      } = scrollSectionElement;
      const shouldShowIndicators = scrollWidth > clientWidth;
      const shouldShowRightIndicator = left < 1;
      const shouldShowLeftIndicator = left > 0;

      if (shouldShowIndicators && shouldShowRightIndicator) {
        scrollRightIndicator.style.display = 'block';
      } else {
        scrollRightIndicator.style.display = 'none';
      }

      if (shouldShowIndicators && shouldShowLeftIndicator) {
        scrollLeftIndicator.style.display = 'block';
      } else {
        scrollLeftIndicator.style.display = 'none';
      }
    });
  };

  registerScrollSectionElements = (rowId, elements) => {
    if (!this.scrollSectionElements.has(rowId)) {
      this.scrollSectionElements.set(rowId, elements);
    }
  };

  render() {
    const { children, className } = this.props;

    return (
      <div className={className} style={defaultStyle}>
        <ScrollContext.Provider
          value={{
            handleOnScroll: this.handleOnScroll,
            registerScrollSectionElements: this.registerScrollSectionElements,
          }}>
          {children}
        </ScrollContext.Provider>
      </div>
    );
  }
}

Table.propTypes = {
  className: PropTypes.any,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Table;

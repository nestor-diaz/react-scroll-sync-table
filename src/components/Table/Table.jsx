import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollContext from '../ScrollContext';

const defaultStyle = {
  display: 'flex',
  flexDirection: 'column',
};

class Table extends Component {
  state = {
    scrollSections: new Map(),
  };

  handleOnScroll = scroll => {
    const { scrollSections } = this.state;

    scrollSections.forEach(section => section.scrollLeft(scroll.left));
  };

  registerScrollSection = (rowId, elementRef) => {
    const { scrollSections } = this.state;

    if (!scrollSections.has(rowId)) {
      this.setState({ scrollSections: scrollSections.set(rowId, elementRef) });
    }
  };

  render() {
    const { children, className } = this.props;

    return (
      <div className={className} style={defaultStyle}>
        <ScrollContext.Provider
          value={{
            handleOnScroll: this.handleOnScroll,
            registerScrollSection: this.registerScrollSection,
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

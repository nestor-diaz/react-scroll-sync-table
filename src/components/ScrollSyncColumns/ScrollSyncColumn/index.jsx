import React from 'react';
import PropTypes from 'prop-types';
import './ScrollSyncColumn.css';

const ScrollSyncColumn = ({ width, children }) => {
  const styles = {
    width: width,
    flex: `0 0 ${width}`
  };

  return (<div className="scrollSyncColumn" style={styles}>{ children }</div>);
};

ScrollSyncColumn.propTypes = {
  width: PropTypes.string,
  children: PropTypes.oneOf(PropTypes.object, PropTypes.array).isRequired
};

ScrollSyncColumn.defaultProps = {
  width: '100px'
};

export default ScrollSyncColumn;

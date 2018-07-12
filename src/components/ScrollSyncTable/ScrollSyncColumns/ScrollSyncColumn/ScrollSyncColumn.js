import React from 'react';
import './ScrollSyncColumn.css';

const ScrollSyncColumn = ({ width, children }) => {
  const styles = {
    width: width,
    flex: `0 0 ${width}`
  };

  return (<div className="scrollSyncColumn" style={styles}>{ children }</div>);
};

ScrollSyncColumn.defaultProps = {
  width: '100px'
};

export default ScrollSyncColumn;

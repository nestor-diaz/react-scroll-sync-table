import React from 'react';
import './FlexyColumn.css';

const Column = ({ width }) => {
  const styles = {
    width: width,
    flex: `0 0 ${width}`
  };

  return (<div className="flexyColumn" style={styles}>Column</div>);
};

Column.defaultProps = {
  width: '100px'
};

export default Column;

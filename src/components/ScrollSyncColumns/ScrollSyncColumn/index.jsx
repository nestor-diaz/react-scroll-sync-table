import React from 'react';
import PropTypes from 'prop-types';

const ScrollSyncColumn = ({ width, children, className }) => {
  const columnDefaultStyles = {
    width,
    flex: `0 0 ${width}`,
  };

  return (
    <div className={className} style={columnDefaultStyles}>
      {children}
    </div>
  );
};

ScrollSyncColumn.propTypes = {
  width: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.any,
};

ScrollSyncColumn.defaultProps = {
  width: '150px',
  children: null,
  className: '',
};

export default ScrollSyncColumn;

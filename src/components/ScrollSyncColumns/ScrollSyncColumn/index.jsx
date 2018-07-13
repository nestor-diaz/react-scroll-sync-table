import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { scrollSyncColumn } from './index.module.css';

const ScrollSyncColumn = ({ width, children, className }) => {
  const styles = {
    width,
    flex: `0 0 ${width}`,
  };
  const classNames = classnames(className, scrollSyncColumn);

  return (
    <div className={classNames} style={styles}>
      {children}
    </div>
  );
};

ScrollSyncColumn.propTypes = {
  width: PropTypes.string,
  children: PropTypes.any.isRequired,

  /** The class name to override the default styles */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

ScrollSyncColumn.defaultProps = {
  width: '150px',
  className: ''
};

export default ScrollSyncColumn;

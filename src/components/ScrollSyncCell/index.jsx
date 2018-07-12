import React from 'react';
import PropTypes from 'prop-types';

const ScrollSyncCell = ({ column }) => (<div>Cell rendering content for { column }</div>);

ScrollSyncCell.propTypes = {
  /** The column name where the cell should be rendered */
  column: PropTypes.string.isRequired
};

export default ScrollSyncCell;

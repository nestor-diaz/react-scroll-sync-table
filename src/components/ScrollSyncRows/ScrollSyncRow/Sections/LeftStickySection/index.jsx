import React from 'react';
import PropTypes from 'prop-types';
import './LeftStickySection.css';

const LeftStickySection = ({ columns }) => (
  <div className="leftStickySection">
    {columns.map(column => <div key={column.props.name}>{column}</div>)}
  </div>
);

LeftStickySection.propTypes = {
  columns: PropTypes.array.isRequired,
};

export default LeftStickySection;

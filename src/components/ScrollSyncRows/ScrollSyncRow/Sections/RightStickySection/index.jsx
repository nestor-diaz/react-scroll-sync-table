import React from 'react';
import PropTypes from 'prop-types';
import './RightStickySection.css';

const RightStickySection = ({ columns }) => (
  <div className="rightStickySection">
    {columns.map(column => <div key={column.props.name}>{column}</div>)}
  </div>
);

RightStickySection.propTypes = {
  columns: PropTypes.array.isRequired,
};

export default RightStickySection;

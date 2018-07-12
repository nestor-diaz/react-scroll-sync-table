import React from 'react';
import './LeftStickySection.css';

const LeftStickySection = ({ columns }) => (
  <div className="leftStickySection">
    { columns.map((column) => (<div key={column.props.name}>{ column }</div>)) }
  </div>
);

export default LeftStickySection;

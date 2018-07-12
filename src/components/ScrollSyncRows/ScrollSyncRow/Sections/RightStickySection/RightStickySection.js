import React from 'react';
import './RightStickySection.css';

const RightStickySection = ({ columns }) => (
  <div className="rightStickySection">
    { columns.map((column) => (<div key={column.props.name}>{ column }</div>)) }
  </div>
);

export default RightStickySection;

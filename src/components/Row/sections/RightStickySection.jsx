import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const defaultSectionStyle = {
  display: 'flex',
  flex: '0 0 auto',
  position: 'sticky',
  right: '0',
};
const RightStickySection = ({ cells }) => (
  <div style={defaultSectionStyle}>
    {cells.map((cell, index) => (<Fragment key={`rightSection-${index}`}>{cell}</Fragment>))}
  </div>
);

RightStickySection.propTypes = {
  cells: PropTypes.array,
};

RightStickySection.defaultProps = {
  cells: []
};

export default RightStickySection;

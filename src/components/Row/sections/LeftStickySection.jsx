import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const defaultSectionStyle = {
  display: 'flex',
  flex: '0 0 auto',
  position: 'sticky',
  left: '0',
};
const LeftStickySection = ({ cells }) => (
  <div style={defaultSectionStyle}>
    { cells.map((cell, index) => <Fragment key={`leftSection-${index}`}>{cell}</Fragment>) }
  </div>
);

LeftStickySection.propTypes = {
  cells: PropTypes.array,
};

LeftStickySection.defaultProps = {
  cells: []
};

export default LeftStickySection;

import React from 'react';
import PropTypes from 'prop-types';

const defaultSectionStyle = {
  display: 'flex',
  flex: '0 0 auto',
  position: 'sticky',
  left: '0',
};
const LeftStickySection = ({ columns }) => (
  <div style={defaultSectionStyle}>{columns.map(column => column)}</div>
);

LeftStickySection.propTypes = {
  columns: PropTypes.array.isRequired,
};

export default LeftStickySection;

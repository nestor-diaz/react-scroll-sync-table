import React from 'react';
import PropTypes from 'prop-types';

const defaultSectionStyle = {
  display: 'flex',
  flex: '0 0 auto',
  position: 'sticky',
  right: '0',
};
const RightStickySection = ({ columns }) => (
  <div style={defaultSectionStyle}>{columns.map(column => column)}</div>
);

RightStickySection.propTypes = {
  columns: PropTypes.array.isRequired,
};

export default RightStickySection;

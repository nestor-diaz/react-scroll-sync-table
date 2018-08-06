import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-array-index-key */

const defaultSectionStyle = {
  display: 'flex',
  flex: '0 0 auto',
  position: 'sticky',
  left: '0',
};
const LeftSection = ({ cells }) => (
  <div style={defaultSectionStyle}>
    {cells.map((cell, index) => (
      <Fragment key={`leftSection-${index}`}>{cell}</Fragment>
    ))}
  </div>
);

LeftSection.propTypes = {
  cells: PropTypes.array,
};

LeftSection.defaultProps = {
  cells: [],
};

export default LeftSection;

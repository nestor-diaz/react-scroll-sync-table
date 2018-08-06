import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-array-index-key */

const defaultSectionStyle = {
  display: 'flex',
  flex: '0 0 auto',
  position: 'sticky',
  right: '0',
};
const RightSection = ({ cells }) => (
  <div style={defaultSectionStyle}>
    {cells.map((cell, index) => (
      <Fragment key={`rightSection-${index}`}>{cell}</Fragment>
    ))}
  </div>
);

RightSection.propTypes = {
  cells: PropTypes.array,
};

RightSection.defaultProps = {
  cells: [],
};

export default RightSection;

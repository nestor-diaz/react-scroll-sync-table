import React from 'react';
import PropTypes from 'prop-types';

const Row = () => <div />;

Row.propTypes = {
  rowData: PropTypes.object,
};

Row.defaultProps = {
  rowData: {},
};

export default Row;

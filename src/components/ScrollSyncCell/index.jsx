import PropTypes from 'prop-types';

const ScrollSyncCell = ({ children }) => children;

ScrollSyncCell.propTypes = {
  /** The column name where the cell should be rendered */
  column: PropTypes.string.isRequired,
};

export default ScrollSyncCell;

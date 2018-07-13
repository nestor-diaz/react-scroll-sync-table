import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ScrollSyncBody from '../ScrollSyncBody';
import ScrollSyncColumns from '../ScrollSyncColumns';
import ScrollSyncRows from '../ScrollSyncRows';
import { scrollSyncTable } from './index.module.css';

class ScrollSyncTable extends PureComponent {
  constructor(props) {
    super(props);

    this.childrenArray = React.Children.toArray(props.children);
  }

  getColumns = () => {
    const columns = this.childrenArray.find(
      child => child.type === ScrollSyncColumns
    );

    return React.Children.toArray(columns.props.children) || [];
  };

  getRows = () => {
    const rows = this.childrenArray.find(
      child => child.type === ScrollSyncRows
    );

    return React.Children.toArray(rows.props.children) || [];
  };

  extractRowsAndColumns = () => {
    if (React.Children.count(this.props.children) !== 2) {
      return { columns: [], rows: [] };
    }

    return {
      columns: this.getColumns(),
      rows: this.getRows(),
    };
  };

  render() {
    const { stickHeader, className } = this.props;
    const classNames = classnames(scrollSyncTable, className);

    return (
      <div className={classNames}>
        <ScrollSyncBody
          stickHeader={stickHeader}
          {...this.extractRowsAndColumns()}
        />
      </div>
    );
  }
}

ScrollSyncTable.propTypes = {
  /** Whether you want a sticky header or not */
  stickHeader: PropTypes.bool,

  /** The class name to override the default styles */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

ScrollSyncTable.defaultProps = {
  stickHeader: false,
  className: '',
};

export default ScrollSyncTable;

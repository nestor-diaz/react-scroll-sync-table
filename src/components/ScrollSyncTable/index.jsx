import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ScrollSyncBody from '../ScrollSyncBody';
import ScrollSyncColumns from '../ScrollSyncColumns';
import ScrollSyncRows from '../ScrollSyncRows';
import './ScrollSyncTable.css';

class ScrollSyncTable extends PureComponent {
  constructor(props) {
    super(props);

    this.childrenArray = React.Children.toArray(props.children);
  }

  getColumns = () => {
    const columns = this.childrenArray.find((child) => (child.type === ScrollSyncColumns));

    return React.Children.toArray(columns.props.children) || [];
  };

  getRows = () => {
    const rows = this.childrenArray.find((child) => (child.type === ScrollSyncRows));

    return React.Children.toArray(rows.props.children) || [];
  };

  extractRowsAndColumns = () => {
    if (React.Children.count(this.props.children) !== 2) {
      console.warn('ScrollSyncTable: Two children expected, ScrollSyncColumns and ScrollSyncRows');

      return { columns: [], rows: [] };
    }

    return {
      columns: this.getColumns(),
      rows: this.getRows()
    };
  };

  render() {
    const { stickHeader } = this.props;

    return (
      <div className="scrollSyncTable">
        <ScrollSyncBody stickHeader={stickHeader} {...this.extractRowsAndColumns()} />
      </div>
    );
  }
}

ScrollSyncTable.propTypes = {
  /** Whether you want a sticky header or not */
  stickHeader: PropTypes.bool
};

ScrollSyncTable.defaultProps = {
  stickHeader: false
};

export default ScrollSyncTable;

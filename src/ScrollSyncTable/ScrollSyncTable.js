import React, { PureComponent } from 'react';
import ScrollSyncBody from './ScrollSyncBody';
import ScrollSyncColumns from './ScrollSyncColumns';
import ScrollSyncRows from './ScrollSyncRows';
import './ScrollSyncTable.css';

class ScrollSyncTable extends PureComponent {
  getColumns = () => {
    const columns = this.props.children.find((child) => (child.type === ScrollSyncColumns));

    return columns.props.children || [];
  };

  getRows = () => {
    const rows = this.props.children.find((child) => (child.type === ScrollSyncRows));

    return rows.props.children || [];
  };

  extractRowsAndColumns = () => {
    if (React.Children.count(this.props.children) !== 2) {
      console.warn('Two children expected: ScrollSyncColumns and ScrollSyncRows');

      return { columns: [], rows: [] };
    }

    return {
      columns: this.getColumns(),
      rows: this.getRows()
    };
  };

  render() {
    return (
      <div className="scrollSyncTable">
        <ScrollSyncBody {...this.extractRowsAndColumns()} />
      </div>
    );
  }
}

ScrollSyncTable.defaultProps = {
  columns: [],
  rows: []
};

export default ScrollSyncTable;

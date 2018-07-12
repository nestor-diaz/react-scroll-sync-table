import React, { PureComponent } from 'react';
import FlexyTableBody from './FlexyTableBody';
import FlexyColumns from './Columns';
import FlexyRows from './Rows';
import './FlexyTable.css';

class FlexyTable extends PureComponent {
  getColumns = () => {
    const flexyColumns = this.props.children.find((child) => (child.type === FlexyColumns));

    return flexyColumns.props.children || [];
  };

  getRows = () => {
    const flexyRows = this.props.children.find((child) => (child.type === FlexyRows));

    return flexyRows.props.children || [];
  };

  extractRowsAndColumns = () => {
    if (React.Children.count(this.props.children) !== 2) {
      console.warn('Two children expected: FlexyColumns and FlexyRows');

      return { columns: [], rows: [] };
    }

    return {
      columns: this.getColumns(),
      rows: this.getRows()
    };
  };

  render() {
    return (
      <div className="flexyTable">
        <FlexyTableBody {...this.extractRowsAndColumns()} />
      </div>
    );
  }
}

FlexyTable.defaultProps = {
  columns: [],
  rows: []
};

export default FlexyTable;

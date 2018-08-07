import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ScrollSyncTableCell from '../../ScrollSyncCell';
import LeftStickySection from './Sections/LeftStickySection';
import RightStickySection from './Sections/RightStickySection';
import ScrollableSection from './Sections/ScrollableSection';

const defaultRowStyle = {
  display: 'flex',
  overflow: 'hidden',
  minHeight: '50px',
};
const stickyStyle = {
  position: 'sticky',
  top: '0',
  zIndex: '1000',
};

class ScrollSyncRow extends PureComponent {
  static HEADER_ROW_ID = 0;
  static NOT_SPECIFY_COLUMN_VALUE = 'Not Column';

  rowColumns = [];
  leftStickySection = [];
  rightStickySection = [];
  scrollableSection = [];
  rowId = -1;

  constructor(props) {
    super(props);

    this.rowId = Number(props.rowId);
  }

  componentWillMount() {
    if (this.rowId === ScrollSyncRow.HEADER_ROW_ID) {
      this.rowColumns = this.injectPropsToHeaderColumns();
      this.distribuiteColumnsPerSection();
    } else if (this.areChildrenSyncCells()) {
      this.rowColumns = this.setChildPerColumn();
      this.distribuiteColumnsPerSection();
    }
  }

  areChildrenSyncCells = () => {
    const { children } = this.props;
    const childrenArray = React.Children.toArray(children);

    return childrenArray.some(child => child.type === ScrollSyncTableCell);
  };

  injectPropsToRegularColumn = column => {
    const { children, columnClassName } = this.props;
    const columnName = column.props.name;
    const scrollSyncCells = React.Children.toArray(children);
    const scrollSyncCellMatchingColumn = scrollSyncCells.find(
      cell => cell.props.column === columnName
    );
    const scrollSyncCellMatchingColumnChildren = scrollSyncCellMatchingColumn
      ? scrollSyncCellMatchingColumn.props.children
      : '';

    return React.cloneElement(column, {
      children: scrollSyncCellMatchingColumnChildren,
      className: columnClassName,
    });
  };

  injectPropsToHeaderColumns = () => {
    const { columns, columnClassName } = this.props;

    return columns.map(column =>
      React.cloneElement(column, {
        className: columnClassName,
      })
    );
  };

  setChildPerColumn = () => {
    const { children, columns } = this.props;
    let rowColumns = [];

    if (children && React.Children.count(children) > 0) {
      rowColumns = columns.map(this.injectPropsToRegularColumn);
    }

    return rowColumns;
  };

  distribuiteColumnsPerSection = () => {
    this.rowColumns.forEach(column => {
      switch (column.props.stickyAlign) {
        case 'left':
          this.leftStickySection.push(column);
          break;
        case 'right':
          this.rightStickySection.push(column);
          break;
        default:
          this.scrollableSection.push(column);
          break;
      }
    });
  };

  render() {
    const { isSticky, scrollLeft, onScroll, className } = this.props;
    const stickyStyleProps = isSticky ? stickyStyle : {};
    const styles = {
      ...defaultRowStyle,
      ...stickyStyleProps,
    };

    return (
      <div className={className} style={styles}>
        <LeftStickySection columns={this.leftStickySection} />
        <ScrollableSection
          rowId={this.rowId}
          columns={this.scrollableSection}
          onScroll={onScroll}
          scrollLeft={scrollLeft}
        />
        <RightStickySection columns={this.rightStickySection} />
      </div>
    );
  }
}

ScrollSyncRow.propTypes = {
  columns: PropTypes.array,
  className: PropTypes.any,
};

ScrollSyncRow.defaultProps = {
  className: '',
};

export default ScrollSyncRow;

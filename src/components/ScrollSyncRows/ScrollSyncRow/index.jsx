import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ScrollSyncTableCell from '../../ScrollSyncCell';
import LeftStickySection from './Sections/LeftStickySection';
import RightStickySection from './Sections/RightStickySection';
import ScrollableSection from './Sections/ScrollableSection';
import { scrollSyncRow, sticky, header } from './index.module.css';

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

    this.rowId = props.rowId;
  }

  componentWillMount() {
    if (this.rowId === ScrollSyncRow.HEADER_ROW_ID) {
      this.rowColumns = this.props.columns;
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

  replaceColumnChildren = column => {
    const { children } = this.props;
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
    });
  };

  setChildPerColumn = () => {
    const { children, columns } = this.props;
    let rowColumns = [];

    if (children && React.Children.count(children) > 0) {
      rowColumns = columns.map(this.replaceColumnChildren);
    }

    return rowColumns;
  };

  distribuiteColumnsPerSection = () => {
    this.rowColumns.forEach(column => {
      switch (column.props.stickyAlign) {
        case 'left':
          this.leftStickySection.push(column);
          break;
        case 'rigth':
          this.rightStickySection.push(column);
          break;
        default:
          this.scrollableSection.push(column);
          break;
      }
    });
  };

  render() {
    const {
      rowId,
      isSticky,
      isHeader,
      rowBeingScrolled,
      scrollLeft,
      onScroll,
      className
    } = this.props;
    const rowClasses = classnames(className, scrollSyncRow, {
      [sticky]: isSticky,
      [header]: isHeader
    });

    return (
      <div className={rowClasses}>
        <LeftStickySection columns={this.leftStickySection} />
        <ScrollableSection
          rowId={rowId}
          columns={this.scrollableSection}
          rowBeingScrolled={rowBeingScrolled}
          scrollLeft={scrollLeft}
          onScroll={onScroll}
        />
        <RightStickySection columns={this.rightStickySection} />
      </div>
    );
  }
}

ScrollSyncRow.propTypes = {
  /** The class name to override the default styles */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

ScrollSyncRow.defaultProps = {
  className: '',
};

export default ScrollSyncRow;

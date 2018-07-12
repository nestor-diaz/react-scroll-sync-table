import React, { PureComponent } from 'react';
import ScrollSyncTableCell from '../../ScrollSyncCell';
import LeftStickySection from './Sections/LeftStickySection';
import RightStickySection from './Sections/RightStickySection';
import ScrollableSection from './Sections/ScrollableSection';
import './ScrollSyncRow.css';

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
    } else {
      if (this.areChildrenSyncCells()) {
        this.rowColumns = this.setChildPerColumn();
        this.distribuiteColumnsPerSection();
      } else {
        console.warn('ScrollSyncRow: all the row children must be instances of ScrollSyncCell');
      }
    }
  }

  areChildrenSyncCells = () => {
    const { children } = this.props;
    const childrenArray = React.Children.toArray(children);

    return childrenArray.some((child) => (child.type === ScrollSyncTableCell));
  };

  replaceColumnChildren = (column, index) => {
    const { children } = this.props;
    const columnName = column.props.name;
    const scrollSyncCells = React.Children.toArray(children);
    const scrollSyncCellMatchingColumn = scrollSyncCells.find((cell) => (cell.props.column === columnName));
    const scrollSyncCellMatchingColumnChildren = scrollSyncCellMatchingColumn ? scrollSyncCellMatchingColumn.props.children : '';

    return React.cloneElement(column, { children: scrollSyncCellMatchingColumnChildren });
  }

  setChildPerColumn() {
    const { children, columns } = this.props;
    let rowColumns = [];

    if (children && React.Children.count(children) > 0) {
      rowColumns = columns.map(this.replaceColumnChildren);
    } else {
      console.warn('ScrollSyncRow: no ScrollSyncCells were specified as row children');
    }

    return rowColumns;
  }

  distribuiteColumnsPerSection() {
    this.rowColumns.forEach((column) => {
      switch (column.props.stickyAlign) {
        case 'left': this.leftStickySection.push(column); break;
        case 'rigth': this.rightStickySection.push(column); break;
        default: this.scrollableSection.push(column); break;
      }
    });
  }

  render() {
    const {
      rowId,
      isSticky,
      rowBeingScrolled,
      scrollLeft,
      onScroll
    } = this.props;

    const rowClasses = isSticky ? 'scrollSyncRow sticky' : 'scrollSyncRow';

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
  };
};

export default ScrollSyncRow;

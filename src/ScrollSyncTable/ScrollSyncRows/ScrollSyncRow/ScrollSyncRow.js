import React, { PureComponent } from 'react';
import { ScrollableSection } from './Sections';
import './ScrollSyncRow.css';

class ScrollSyncRow extends PureComponent {
  leftStickySection = [];
  rightStickySection = [];
  scrollableSection = [];

  componentWillMount() {
    this.props.columns.forEach((column) => {
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
      isHeader,
      isSticky,
      rowBeingScrolled,
      scrollLeft,
      onScroll
    } = this.props;

    const rowClasses = isSticky ? 'scrollSyncRow sticky' : 'scrollSyncRow';

    return (
      <div className={rowClasses}>
        <div className="leftStickySection">{ this.leftStickySection.map((column) => column) }</div>
        <ScrollableSection
          rowId={rowId}
          columns={this.scrollableSection}
          rowBeingScrolled={rowBeingScrolled}
          scrollLeft={scrollLeft}
          onScroll={onScroll}
        />
        <div className="rightStickySection">{ this.rightStickySection.map((column) => column) }</div>
      </div>
    );
  };
};

export default ScrollSyncRow;

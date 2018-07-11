import React, { PureComponent } from 'react';
import ScrollableSection from './Sections/ScrollableSection';
import FlexyColumn from '../FlexyColumn';
import './FlexyRow.css';

class FlexyRow extends PureComponent {
  leftStickySection = [];
  rightStickySection = [];
  scrollableSection = [];

  componentWillMount() {
    this.props.columns.forEach((column) => {
      switch (column.stickyAlign) {
        case 'left': this.leftStickySection.push(column); break;
        case 'rigth': this.rightStickySection.push(column); break;
        default: this.scrollableSection.push(column); break;
      }
    });
  }

  render() {
    const rowClasses = this.props.isSticky ? 'flexyRow sticky' : 'flexyRow';
    const { rowId, rowBeingScrolled, scrollLeft, onScroll } = this.props;
    const hideScrollbars = rowBeingScrolled !== null && rowBeingScrolled !== rowId;

    return (
      <div className={rowClasses}>
        <div className="leftStickySection">{ this.leftStickySection.map((columnProps) => <FlexyColumn {...columnProps} />) }</div>
        <ScrollableSection
          rowId={rowId}
          columns={this.scrollableSection}
          hideScrollbars={hideScrollbars}
          scrollLeft={scrollLeft}
          onScroll={onScroll}
        />
        <div className="rightStickySection">{ this.rightStickySection.map((columnProps) => <FlexyColumn {...columnProps} />) }</div>
      </div>
    );
  };
};

export default FlexyRow;

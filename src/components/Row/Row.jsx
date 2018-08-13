import React, { Component } from 'react';
import PropTypes from 'prop-types';
import idGenerator from 'react-id-generator';
import { ScrollSection, RightSection, LeftSection } from './sections';
import ScrollContext from '../ScrollContext';

const defaultRowStyle = {
  display: 'flex',
  minHeight: '50px',
};
const defaultCellStyle = width => ({
  width,
  flex: `0 0 ${width}`,
});

class Row extends Component {
  static DEFAULT_COLUMN_WIDTH = 50;

  state = {
    stickRightSection: [],
    stickLeftSection: [],
    scrollSection: [],
  };

  constructor(props) {
    super(props);

    this.rowId = idGenerator();
  }

  static getDerivedStateFromProps({ columns, cellClassName, rowData }) {
    const stickLeftSection = [];
    const stickRightSection = [];
    const scrollSection = [];

    columns.forEach(column => {
      const columnDataKey = column.dataKey;
      const columnWidth = column.width || Row.DEFAULT_COLUMN_WIDTH;
      const cellContent = rowData[columnDataKey];
      const cell = (
        <div className={cellClassName} style={defaultCellStyle(columnWidth)}>
          {cellContent}
        </div>
      );

      switch (column.stickAlign) {
        case 'right':
          stickRightSection.push(cell);
          break;
        case 'left':
          stickLeftSection.push(cell);
          break;
        default:
          scrollSection.push(cell);
          break;
      }
    });

    return {
      stickLeftSection,
      stickRightSection,
      scrollSection,
    };
  }

  render() {
    const { stickLeftSection, stickRightSection, scrollSection } = this.state;
    const { className } = this.props;

    return (
      <div className={className} style={defaultRowStyle}>
        <LeftSection cells={stickLeftSection} />
        <ScrollContext.Consumer>
          {({ handleOnScroll, registerScrollSection }) => (
            <ScrollSection
              cells={scrollSection}
              onScroll={handleOnScroll}
              registerScrollSection={registerScrollSection}
              rowId={this.rowId}
            />
          )}
        </ScrollContext.Consumer>
        <RightSection cells={stickRightSection} />
      </div>
    );
  }
}

Row.propTypes = {
  className: PropTypes.any,
  cellClassName: PropTypes.any,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string,
      stickAlign: PropTypes.string,
      width: PropTypes.string,
    })
  ),
  rowData: PropTypes.object,
};

Row.defaultProps = {
  className: '',
  cellClassName: '',
  columns: [],
  rowData: {},
};

export default Row;

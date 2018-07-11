import React, { PureComponent } from 'react';
import FlexyColumn from '../../../FlexyColumn';
import './ScrollableSection.css';

class ScrollableSection extends PureComponent {
  preventEvent = false;
  isScrolling = false;

  constructor(props) {
    super(props);

    this.setScrollableSectionRef = (element) => {
      this.scrollableSection = element;
    };
  }

  componentDidMount() {
    this.scrollableSection.addEventListener('scroll', this.onScrollSection);
  }

  componentDidUpdate() {
    this.preventChangingCurrentRow = true;
    this.scrollableSection.scrollLeft = this.props.scrollLeft;
  }

  onScrollSection = (event) => {
    const rowBeingScrolled = Number(event.target.getAttribute('rowid'));
    const { scrollLeft } = this.scrollableSection;

    this.isScrolling = !this.isScrolling;

    this.props.onScroll({
      isScrolling: this.isScrolling,
      isScrollingOnSameRow: this.preventChangingCurrentRow,
      rowBeingScrolled,
      scrollLeft
    }, () => {
      this.preventChangingCurrentRow = false;
      this.isScrolling = false;
    });
  };

  renderWithScrollBars = () => {
    const { rowId, columns } = this.props;

    return (
      <div className="scrollableSection" rowid={rowId} ref={this.setScrollableSectionRef}>
        { columns.map((columnProps) => <FlexyColumn {...columnProps} />) }
      </div>
    );
  }

  renderWithoutScrollBars = () => {
    const { rowId, columns } = this.props;

    return (
      <div className="scrollableSectionHidden" rowid={rowId} ref={this.setScrollableSectionRef}>
        { columns.map((columnProps) => <FlexyColumn {...columnProps} />) }
      </div>
    );
  }

  render() {
    const { hideScrollbars } = this.props;

    return hideScrollbars ? this.renderWithoutScrollBars() : this.renderWithScrollBars();
  }
};

export default ScrollableSection;

import React from 'react';
import { shallow } from 'enzyme';
import ScrollSyncBody from '../components/ScrollSyncBody';
import ScrollSyncColumn from '../components/ScrollSyncColumns/ScrollSyncColumn';
import ScrollSyncRow from '../components/ScrollSyncRows/ScrollSyncRow';

describe('ScrollSyncBody', () => {
  const columns = [
    <ScrollSyncColumn name="a" />,
    <ScrollSyncColumn name="b" />
  ];
  const rows = [
    <ScrollSyncRow column="a" />,
    <ScrollSyncRow column="b" />
  ];

  test('should render its default content', () => {
    const ScrollSyncBodyComponent = shallow(<ScrollSyncBody />);

    expect(ScrollSyncBodyComponent).toMatchSnapshot();
  });

  test('should render the given columns and rows', () => {
    const ScrollSyncBodyComponent = shallow(
      <ScrollSyncBody columns={columns} rows={rows} />
    );

    expect(ScrollSyncBodyComponent).toMatchSnapshot();
  });

  test('should pass the provided class names to the rows', () => {
    const ScrollSyncBodyComponent = shallow(
      <ScrollSyncBody
        columns={columns}
        rows={rows}
        rowClassName="row-class-name"
        columnClassName="column-class-name"
        headerClassName="header-class-name"
        headerColumnClassName="header-column-class-name"
      />
    );

    expect(ScrollSyncBodyComponent).toMatchSnapshot();
  });

  test('should set isSticky when stickHeader is provided', () => {
    const ScrollSyncBodyComponent = shallow(
      <ScrollSyncBody
        columns={columns}
        rows={rows}
        stickHeader
      />
    );

    expect(ScrollSyncBodyComponent).toMatchSnapshot();
  });

  test('should update the scroll left position when handleScrollEvent is called', () => {
    const ScrollSyncBodyComponent = shallow(
      <ScrollSyncBody columns={columns} rows={rows} />
    );

    const HeaderRow = ScrollSyncBodyComponent.find('ScrollSyncRow').first();
    const scrollEventCallback = jest.fn();

    HeaderRow.prop('onScroll')({
      isScrollingOnSameRow: true, rowBeingScrolled: 0, scrollLeft: 10
    }, scrollEventCallback);

    expect(ScrollSyncBodyComponent.state()).toEqual({ scrollLeft: 10, rowBeingScrolled: null });
    expect(scrollEventCallback).toHaveBeenCalled();
  });

  test('should update the row being scrolled when handleScrollEvent is called from a different row', () => {
    const ScrollSyncBodyComponent = shallow(
      <ScrollSyncBody columns={columns} rows={rows} />
    );

    ScrollSyncBodyComponent.setState({
      scrollLeft: 10,
      rowBeingScrolled: 0
    });

    const HeaderRow = ScrollSyncBodyComponent.find('ScrollSyncRow').first();
    const scrollEventCallback = jest.fn();

    HeaderRow.prop('onScroll')({
      isScrollingOnSameRow: false, rowBeingScrolled: 1, scrollLeft: 20
    }, scrollEventCallback);

    expect(ScrollSyncBodyComponent.state()).toEqual({ scrollLeft: 20, rowBeingScrolled: 1 });
    expect(scrollEventCallback).toHaveBeenCalled();
  });
});

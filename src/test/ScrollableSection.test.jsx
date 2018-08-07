import React from 'react';
import { shallow, mount } from 'enzyme';
import { ScrollableSection } from '../components/ScrollSyncRows/ScrollSyncRow/sections';
import ScrollSyncColumn from '../components/ScrollSyncColumns/ScrollSyncColumn';

describe('ScrollableSection', () => {
  const columns = [
    <ScrollSyncColumn key="a" dataKey="a">
      Column A
    </ScrollSyncColumn>,
    <ScrollSyncColumn key="b" dataKey="b">
      Column B
    </ScrollSyncColumn>,
  ];

  test('should render its default content', () => {
    const ScrollableSectionComponent = shallow(
      <ScrollableSection cells={[]} />
    );

    expect(ScrollableSectionComponent).toMatchSnapshot();
  });

  test('should render the given columns', () => {
    const ScrollableSectionComponent = shallow(
      <ScrollableSection cells={columns} />
    );

    expect(ScrollableSectionComponent).toMatchSnapshot();
  });

  test('should call the callback when the section is scrolled', () => {
    const onScroll = jest.fn();
    const ScrollableSectionComponent = mount(
      <ScrollableSection cells={columns} onScroll={onScroll} />
    );
    const ScrollBars = ScrollableSectionComponent.find('Scrollbars');

    ScrollBars.prop('onScroll')();

    expect(onScroll).toHaveBeenCalled();
  });

  test('should show the scroll tracks when the mouse enters to the section', () => {
    const ScrollableSectionComponent = shallow(
      <ScrollableSection cells={[]} />
    );
    const ScrollableWrapper = ScrollableSectionComponent.find(
      '#scrollable-wrapper'
    );

    ScrollableWrapper.prop('onMouseEnter')();

    expect(ScrollableSectionComponent.state()).toEqual({
      showScrollTrack: true,
    });
  });

  test('should hide the scroll tracks when the mouse leaves the section', () => {
    const ScrollableSectionComponent = shallow(
      <ScrollableSection cells={[]} />
    );
    const ScrollableWrapper = ScrollableSectionComponent.find(
      '#scrollable-wrapper'
    );

    ScrollableWrapper.prop('onMouseLeave')();

    expect(ScrollableSectionComponent.state()).toEqual({
      showScrollTrack: false,
    });
  });
});

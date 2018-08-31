import React from 'react';
import { shallow, mount } from 'enzyme';
import { ScrollSection } from '../../../components/Row/sections';

describe('ScrollSection', () => {
  const cells = [
    <div key="0">Cell A</div>,
    <div key="1">Cell B</div>,
    <div key="2">Cell C</div>,
  ];

  test('should render its default content', () => {
    const ScrollSectionComponent = shallow(<ScrollSection cells={[]} />);

    expect(ScrollSectionComponent).toMatchSnapshot();
  });

  test('should render the given cells', () => {
    const ScrollSectionComponent = shallow(<ScrollSection cells={cells} />);

    expect(ScrollSectionComponent).toMatchSnapshot();
  });

  test('should call the callback when the section is scrolled', () => {
    const onScroll = jest.fn();
    const ScrollSectionComponent = mount(
      <ScrollSection cells={cells} onScroll={onScroll} />
    );
    const ScrollBars = ScrollSectionComponent.find('Scrollbars');

    ScrollBars.prop('onScroll')();

    expect(onScroll).toHaveBeenCalled();
  });

  test('should show the scroll tracks when the mouse enters to the section', () => {
    const ScrollSectionComponent = mount(<ScrollSection cells={[]} />);
    const ScrollableWrapper = ScrollSectionComponent.find(
      '#scrollable-wrapper'
    );

    ScrollableWrapper.prop('onMouseEnter')();

    expect(ScrollSectionComponent.state()).toEqual({
      showScrollTrack: true,
    });
  });

  test('should hide the scroll tracks when the mouse leaves the section', () => {
    const ScrollSectionComponent = mount(<ScrollSection cells={[]} />);
    const ScrollableWrapper = ScrollSectionComponent.find(
      '#scrollable-wrapper'
    );

    ScrollableWrapper.prop('onMouseLeave')();

    expect(ScrollSectionComponent.state()).toEqual({
      showScrollTrack: false,
    });
  });

  test('should register the scroll section when it renders', () => {
    const registerScrollSectionElements = jest.fn();

    mount(
      <ScrollSection cells={[]} registerScrollSectionElements={registerScrollSectionElements} />
    );

    expect(registerScrollSectionElements).toHaveBeenCalled();
  });
});

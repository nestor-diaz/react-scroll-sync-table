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

  test('should render the scroll arrows when the section is scrollable', () => {
    const ScrollSectionComponent = shallow(<ScrollSection cells={cells} />);

    ScrollSectionComponent.setState({ shouldShowScrollArrows: true });

    expect(ScrollSectionComponent).toMatchSnapshot();
  });

  test('should call the callback when the section is scrolled to the left', () => {
    const onScroll = jest.fn();
    const ScrollSectionComponent = mount(
      <ScrollSection cells={cells} onScroll={onScroll} />
    );

    ScrollSectionComponent.setState({ shouldShowScrollArrows: true });

    const ScrollBars = ScrollSectionComponent.find('#scrollLeft');

    ScrollBars.prop('onClick')();

    expect(onScroll).toHaveBeenCalledWith(
      expect.objectContaining({ direction: 'left' })
    );
  });

  test('should call the callback when the section is scrolled to the right', () => {
    const onScroll = jest.fn();
    const ScrollSectionComponent = mount(
      <ScrollSection cells={cells} onScroll={onScroll} />
    );

    ScrollSectionComponent.setState({ shouldShowScrollArrows: true });

    const ScrollBars = ScrollSectionComponent.find('#scrollRight');

    ScrollBars.prop('onClick')();

    expect(onScroll).toHaveBeenCalledWith(
      expect.objectContaining({ direction: 'right' })
    );
  });

  test('should register the scroll section when it renders', () => {
    const registerScrollSectionElements = jest.fn();

    mount(
      <ScrollSection
        cells={[]}
        registerScrollSectionElements={registerScrollSectionElements}
      />
    );

    expect(registerScrollSectionElements).toHaveBeenCalled();
  });
});

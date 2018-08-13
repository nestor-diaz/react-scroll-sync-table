import React from 'react';
import { shallow } from 'enzyme';
import { LeftSection } from '../../../components/Row/sections';

describe('LeftSection', () => {
  test('should render its default content', () => {
    const LeftSectionComponent = shallow(<LeftSection cells={[]} />);

    expect(LeftSectionComponent).toMatchSnapshot();
  });

  test('should render the given cells', () => {
    const cells = [
      <div key="0">Cell A</div>,
      <div key="1">Cell B</div>,
      <div key="2">Cell C</div>,
    ];
    const LeftSectionComponent = shallow(<LeftSection cells={cells} />);

    expect(LeftSectionComponent).toMatchSnapshot();
  });
});

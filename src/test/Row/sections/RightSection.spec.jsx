import React from 'react';
import { shallow } from 'enzyme';
import { RightSection } from '../../../components/Row/sections';

describe('RightSection', () => {
  test('should render its default content', () => {
    const RightSectionComponent = shallow(<RightSection cells={[]} />);

    expect(RightSectionComponent).toMatchSnapshot();
  });

  test('should render the given columns', () => {
    const cells = [
      <div key="0">Cell A</div>,
      <div key="1">Cell B</div>,
      <div key="2">Cell C</div>,
    ];
    const RightSectionComponent = shallow(<RightSection cells={cells} />);

    expect(RightSectionComponent).toMatchSnapshot();
  });
});

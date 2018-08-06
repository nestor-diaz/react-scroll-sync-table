import React from 'react';
import { shallow } from 'enzyme';
import { RightSection } from '../../../components/Row/sections';

describe('RightSection', () => {
  test('should render its default content', () => {
    const RightSectionComponent = shallow(<RightSection />);

    expect(RightSectionComponent).toMatchSnapshot();
  });

  test('should render the given cells', () => {
    const cells = [<div key="a">Cell 5</div>, <div key="b">Cell 6</div>];
    const RightSectionComponent = shallow(<RightSection cells={cells} />);

    expect(RightSectionComponent).toMatchSnapshot();
  });
});

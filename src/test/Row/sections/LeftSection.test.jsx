import React from 'react';
import { shallow } from 'enzyme';
import { LeftSection } from '../../../components/Row/sections';

describe('LeftSection', () => {
  test('should render its default content', () => {
    const LeftSectionComponent = shallow(<LeftSection />);

    expect(LeftSectionComponent).toMatchSnapshot();
  });

  test('should render the given cells', () => {
    const cells = [<div key="a">Cell 1</div>, <div key="b">Cell 2</div>];
    const LeftSectionComponent = shallow(<LeftSection cells={cells} />);

    expect(LeftSectionComponent).toMatchSnapshot();
  });
});

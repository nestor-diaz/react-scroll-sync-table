import React from 'react';
import { shallow } from 'enzyme';
import ScrollSyncColumns from '../components/ScrollSyncColumns';

describe('ScrollSyncColumns', () => {
  test('should render its default content', () => {
    const ScrollSyncColumnsComponent = shallow(<ScrollSyncColumns />);

    expect(ScrollSyncColumnsComponent).toMatchSnapshot();
  });
});

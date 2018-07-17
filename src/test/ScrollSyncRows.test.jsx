import React from 'react';
import { shallow } from 'enzyme';
import ScrollSyncRows from '../components/ScrollSyncRows';

describe('ScrollSyncRows', () => {
  test('should render its default content', () => {
    const ScrollSyncRowsComponent = shallow(<ScrollSyncRows />);

    expect(ScrollSyncRowsComponent).toMatchSnapshot();
  });
});

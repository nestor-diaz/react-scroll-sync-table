import React from 'react';
import { shallow } from 'enzyme';
import ScrollSyncCell from '../components/ScrollSyncCell';

describe('ScrollSyncCell', () => {
  test('should render its default content', () => {
    const ScrollSyncCellComponent = shallow(<ScrollSyncCell column="a" />);

    expect(ScrollSyncCellComponent).toMatchSnapshot();
  });
});

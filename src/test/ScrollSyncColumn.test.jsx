import React from 'react';
import { shallow } from 'enzyme';
import ScrollSyncColumn from '../components/ScrollSyncColumns/ScrollSyncColumn';

describe('ScrollSyncColumn', () => {
  test('should render its default content', () => {
    const ScrollSyncColumnComponent = shallow(<ScrollSyncColumn />);

    expect(ScrollSyncColumnComponent).toMatchSnapshot();
  });

  test('should render the given children', () => {
    const ScrollSyncColumnComponent = shallow(
      <ScrollSyncColumn>
        <div>Child component</div>
      </ScrollSyncColumn>
    );

    expect(ScrollSyncColumnComponent).toMatchSnapshot();
  });

  test('should use the given width and class name', () => {
    const ScrollSyncColumnComponent = shallow(
      <ScrollSyncColumn width="200px" className="a-class-name" />
    );

    expect(ScrollSyncColumnComponent).toMatchSnapshot();
  });
});

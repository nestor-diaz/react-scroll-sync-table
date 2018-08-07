import React from 'react';
import { shallow } from 'enzyme';
import { RightStickySection } from '../components/ScrollSyncRows/ScrollSyncRow/sections';
import ScrollSyncColumn from '../components/ScrollSyncColumns/ScrollSyncColumn';

describe('RightStickySection', () => {
  test('should render its default content', () => {
    const RightStickySectionComponent = shallow(
      <RightStickySection cells={[]} />
    );

    expect(RightStickySectionComponent).toMatchSnapshot();
  });

  test('should render the given columns', () => {
    const columns = [
      <ScrollSyncColumn key="a" dataKey="a">
        Column A
      </ScrollSyncColumn>,
      <ScrollSyncColumn key="b" dataKey="b">
        Column B
      </ScrollSyncColumn>,
    ];
    const RightStickySectionComponent = shallow(
      <RightStickySection cells={columns} />
    );

    expect(RightStickySectionComponent).toMatchSnapshot();
  });
});

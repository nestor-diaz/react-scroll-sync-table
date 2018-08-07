import React from 'react';
import { shallow } from 'enzyme';
import { LeftStickySection } from '../components/ScrollSyncRows/ScrollSyncRow/sections';
import ScrollSyncColumn from '../components/ScrollSyncColumns/ScrollSyncColumn';

describe('LeftStickySection', () => {
  test('should render its default content', () => {
    const LeftStickySectionComponent = shallow(
      <LeftStickySection cells={[]} />
    );

    expect(LeftStickySectionComponent).toMatchSnapshot();
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
    const LeftStickySectionComponent = shallow(
      <LeftStickySection cells={columns} />
    );

    expect(LeftStickySectionComponent).toMatchSnapshot();
  });
});

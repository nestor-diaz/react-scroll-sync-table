import React from 'react';
import { shallow } from 'enzyme';
import LeftStickySection from '../components/ScrollSyncRows/ScrollSyncRow/Sections/LeftStickySection';
import ScrollSyncColumn from '../components/ScrollSyncColumns/ScrollSyncColumn';

describe('LeftStickySection', () => {
  test('should render its default content', () => {
    const LeftStickySectionComponent = shallow(
      <LeftStickySection columns={[]} />
    );

    expect(LeftStickySectionComponent).toMatchSnapshot();
  });

  test('should render the given columns', () => {
    const columns = [
      <ScrollSyncColumn key="a" name="a">
        Column A
      </ScrollSyncColumn>,
      <ScrollSyncColumn key="b" name="b">
        Column B
      </ScrollSyncColumn>,
    ];
    const LeftStickySectionComponent = shallow(
      <LeftStickySection columns={columns} />
    );

    expect(LeftStickySectionComponent).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import RightStickySection from '../components/ScrollSyncRows/ScrollSyncRow/Sections/RightStickySection';
import ScrollSyncColumn from '../components/ScrollSyncColumns/ScrollSyncColumn';

describe('RightStickySection', () => {
  test('should render its default content', () => {
    const RightStickySectionComponent = shallow(
      <RightStickySection columns={[]} />
    );

    expect(RightStickySectionComponent).toMatchSnapshot();
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
    const RightStickySectionComponent = shallow(
      <RightStickySection columns={columns} />
    );

    expect(RightStickySectionComponent).toMatchSnapshot();
  });
});

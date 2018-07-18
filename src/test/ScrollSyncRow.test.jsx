import React from 'react';
import { shallow } from 'enzyme';
import ScrollSyncRow from '../components/ScrollSyncRows/ScrollSyncRow';
import ScrollSyncColumn from '../components/ScrollSyncColumns/ScrollSyncColumn';
import ScrollSyncCell from '../components/ScrollSyncCell';

describe('ScrollSyncRow', () => {
  test('should render its default content', () => {
    const ScrollSyncRowComponent = shallow(<ScrollSyncRow rowId="1" />);

    expect(ScrollSyncRowComponent).toMatchSnapshot();
  });

  test('should render columns in the left sticky section', () => {
    const columns = [
      <ScrollSyncColumn key="a" name="a" stickyAlign="left" />
    ];
    const ScrollSyncRowComponent = shallow(
      <ScrollSyncRow columns={columns} rowId={1}>
        <ScrollSyncCell column="a">Row A / Column A</ScrollSyncCell>
      </ScrollSyncRow>
    );

    expect(ScrollSyncRowComponent).toMatchSnapshot();
  });

  test('should render columns in the rigth sticky section', () => {
    const columns = [
      <ScrollSyncColumn key="a" name="a" stickyAlign="right" />
    ];
    const ScrollSyncRowComponent = shallow(
      <ScrollSyncRow columns={columns} rowId={1}>
        <ScrollSyncCell column="a">Row A / Column A</ScrollSyncCell>
      </ScrollSyncRow>
    );

    expect(ScrollSyncRowComponent).toMatchSnapshot();
  });

  test('should render columns in the scrollable section if no sticky align is specified', () => {
    const columns = [
      <ScrollSyncColumn key="a" name="a" />
    ];
    const ScrollSyncRowComponent = shallow(
      <ScrollSyncRow columns={columns} rowId={1}>
        <ScrollSyncCell column="a">Row A / Column A</ScrollSyncCell>
      </ScrollSyncRow>
    );

    expect(ScrollSyncRowComponent).toMatchSnapshot();
  });

  test('should render a header row when it is specified with the given class name', () => {
    const columns = [
      <ScrollSyncColumn key="a" name="a">Column A</ScrollSyncColumn>
    ];
    const ScrollSyncRowComponent = shallow(
      <ScrollSyncRow columns={columns} rowId={0} className="a-header-class-name">
        <ScrollSyncCell column="a">Row A / Column A</ScrollSyncCell>
      </ScrollSyncRow>
    );

    expect(ScrollSyncRowComponent).toMatchSnapshot();
  });

  test('should handle rendering when the given cell does not match any column', () => {
    const columns = [
      <ScrollSyncColumn key="a" name="a">Column A</ScrollSyncColumn>
    ];
    const ScrollSyncRowComponent = shallow(
      <ScrollSyncRow columns={columns} rowId={1}>
        <ScrollSyncCell column="b">Row A / Column B</ScrollSyncCell>
      </ScrollSyncRow>
    );

    expect(ScrollSyncRowComponent).toMatchSnapshot();
  });
});

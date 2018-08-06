import React from 'react';
import { shallow } from 'enzyme';
import BaseRow from '../../components/Row/BaseRow';

describe('BaseRow', () => {
  const columns = [
    {
      dataKey: 'a',
      label: 'a',
      stickyAlign: 'left',
    },
    {
      dataKey: 'b',
      label: 'b',
      width: '150',
    },
    {
      dataKey: 'c',
      label: 'c',
      width: '50',
      stickyAlign: 'right',
    },
  ];

  test('should render its default content', () => {
    const BaseRowComponent = shallow(<BaseRow />);

    expect(BaseRowComponent).toMatchSnapshot();
  });

  test('should render a cell per column', () => {
    const rowData = {
      a: 'Row A / Column A',
      b: 'Row A / Column B',
      c: 'Row A / Column C',
    };
    const BaseRowComponent = shallow(
      <BaseRow columns={columns} rowData={rowData} />
    );

    expect(BaseRowComponent).toMatchSnapshot();
  });

  test('should render an empty cell if no data key is provided', () => {
    const column = {
      label: 'a',
    };
    const rowData = {
      a: 'Row A / Column A',
    };
    const BaseRowComponent = shallow(
      <BaseRow columns={[column]} rowData={rowData} />
    );

    expect(BaseRowComponent).toMatchSnapshot();
  });

  test('should set isSticky when isSticky is provided', () => {
    const BaseRowComponent = shallow(<BaseRow isSticky />);

    expect(BaseRowComponent).toMatchSnapshot();
  });
});

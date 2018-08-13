import React from 'react';
import { shallow } from 'enzyme';
import Row from '../../components/Row';

describe('Row', () => {
  const columns = [
    {
      dataKey: 'a',
      stickAlign: 'left',
    },
    {
      dataKey: 'b',
      width: '150',
    },
    {
      dataKey: 'c',
      width: '50',
      stickAlign: 'right',
    },
  ];

  test('should render its default content', () => {
    const RowComponent = shallow(<Row columns={[]} />);

    expect(RowComponent).toMatchSnapshot();
  });

  test('should render a cell per column', () => {
    const rowData = {
      a: 'Row A / Column A',
      b: 'Row A / Column B',
      c: 'Row A / Column C',
    };
    const RowComponent = shallow(<Row columns={columns} rowData={rowData} />);

    expect(RowComponent).toMatchSnapshot();
  });

  test('should render an empty cell if no data key is provided', () => {
    const column = {
      dataKey: 'a',
    };
    const rowData = {
      a: 'Row A / Column A',
    };
    const RowComponent = shallow(<Row columns={[column]} rowData={rowData} />);

    expect(RowComponent).toMatchSnapshot();
  });
});

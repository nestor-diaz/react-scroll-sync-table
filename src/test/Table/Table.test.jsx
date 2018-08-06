import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../components/Table';
import Row from '../../components/Row';

describe('Table', () => {
  test('should render its default content', () => {
    const TableComponent = shallow(<Table columns={[]} />);

    expect(TableComponent).toMatchSnapshot();
  });

  test('should pass down the given columns to the table body', () => {
    const columns = [
      {
        dataKey: 'a',
        label: 'a',
        stickyAlign: 'left',
      },
    ];
    const TableComponent = shallow(<Table columns={columns} />);

    expect(TableComponent).toMatchSnapshot();
  });

  test('should pass down the given rows to the table body', () => {
    const TableComponent = shallow(
      <Table columns={[]}>
        <Row rowData={{}} />
        <Row rowData={{}} />
      </Table>
    );

    expect(TableComponent).toMatchSnapshot();
  });
});

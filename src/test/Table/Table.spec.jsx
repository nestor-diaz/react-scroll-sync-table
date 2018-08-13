import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../components/Table';
import Row from '../../components/Row';

describe('Table', () => {
  test('should render its default content with one single child', () => {
    const TableComponent = shallow(
      <Table>
        <Row />
      </Table>
    );

    expect(TableComponent).toMatchSnapshot();
  });

  test('should render the given children', () => {
    const TableComponent = shallow(
      <Table>
        <Row />
        <Row />
        <Row />
      </Table>
    );

    expect(TableComponent).toMatchSnapshot();
  });
});

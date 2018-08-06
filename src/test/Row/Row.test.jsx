import React from 'react';
import { shallow } from 'enzyme';
import Row from '../../components/Row';

describe('Row', () => {
  test('should render its default', () => {
    const RowComponent = shallow(<Row />);

    expect(RowComponent).toMatchSnapshot();
  });
});

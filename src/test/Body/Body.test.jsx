import React from 'react';
import { shallow } from 'enzyme';
import Body from '../../components/Body';
import Row from '../../components/Row';

describe('Body', () => {
  const columns = [
    {
      dataKey: 'a',
      label: 'a',
    },
    {
      dataKey: 'b',
      label: 'b',
    },
  ];

  test('should render its default content', () => {
    const BodyComponent = shallow(<Body />);

    expect(BodyComponent).toMatchSnapshot();
  });

  test('should render a BaseRow for each declared Row in the table', () => {
    const rows = [<Row key="a" />, <Row key="b" />, <Row key="c" />];
    const BodyComponent = shallow(<Body rows={rows} />);

    expect(BodyComponent).toMatchSnapshot();
  });

  test('should stick the header when stickHeader is provided', () => {
    const BodyComponent = shallow(<Body stickHeader />);

    expect(BodyComponent).toMatchSnapshot();
  });

  test('should update the scroll left position when handleScrollEvent is called', () => {
    const BodyComponent = shallow(<Body />);
    const HeaderRow = BodyComponent.find('BaseRow').first();

    HeaderRow.prop('onScroll')({ scrollLeft: 10 });

    expect(BodyComponent.state()).toEqual({
      scrollLeft: 10,
    });
  });

  test('should pass the column labels to the header row if not renderer is provided', () => {
    const BodyComponent = shallow(<Body columns={columns} />);

    expect(BodyComponent).toMatchSnapshot();
  });

  test('should call the provided column header renderer', () => {
    const columnHeaderRenderer = ({ label }) => <div>{label}</div>;
    const BodyComponent = shallow(
      <Body columns={columns} columnHeaderRenderer={columnHeaderRenderer} />
    );

    expect(BodyComponent).toMatchSnapshot();
  });
});

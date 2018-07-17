import { shallow } from 'enzyme';
import ScrollSyncTable from '../components/ScrollSyncTable';
import ScrollSyncColumns from '../components/ScrollSyncColumns';
import ScrollSyncColumn from '../components/ScrollSyncColumns/ScrollSyncColumn';
import ScrollSyncRows from '../components/ScrollSyncRows';
import ScrollSyncRow from '../components/ScrollSyncRows/ScrollSyncRow';
import ScrollSyncCell from '../components/ScrollSyncCell';

describe('ScrollSyncTable', () => {
  test('should render with default props', () => {
    const ScrollSyncTableComponent = shallow(<ScrollSyncTable />);

    expect(ScrollSyncTableComponent).toMatchSnapshot();
  });

  test('should render with the given class names', () => {
    const ScrollSyncTableComponent = shallow(
      <ScrollSyncTable
        tableClassName="table-class-name"
        rowClassName="row-class-name"
        columnClassName="column-class-name"
        headerClassName="header-class-name"
        headerColumnClassName="heade-column-class-name"
      />
    );

    expect(ScrollSyncTableComponent).toMatchSnapshot();
  });

  test('should pass the prop stickHeader to the table body', () => {
    const ScrollSyncTableComponent = shallow(<ScrollSyncTable stickHeader />);

    expect(ScrollSyncTableComponent).toMatchSnapshot();
  });

  test('should render the given columns and rows', () => {
    const ScrollSyncTableComponent = shallow(
      <ScrollSyncTable>
        <ScrollSyncColumns>
          <ScrollSyncColumn name="a">A</ScrollSyncColumn>
        </ScrollSyncColumns>
        <ScrollSyncRows>
          <ScrollSyncRow>
            <ScrollSyncCell column="a">A / A</ScrollSyncCell>
          </ScrollSyncRow>
        </ScrollSyncRows>
      </ScrollSyncTable>
    );

    expect(ScrollSyncTableComponent).toMatchSnapshot();
  });

  test('should handle rendering when there are not columns neither rows', () => {
    const ScrollSyncTableComponent = shallow(
      <ScrollSyncTable>
        <ScrollSyncColumns />
        <ScrollSyncRows />
      </ScrollSyncTable>
    );

    expect(ScrollSyncTableComponent).toMatchSnapshot();
  });
});

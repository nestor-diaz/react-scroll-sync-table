import React from 'react';
import Table from '../../components/Table';
import StatefullRow from './StatefullRow';
import Row from '../../components/Row';
import './StatefullRowTable.css';

const columns = [
  {
    dataKey: 'columnA',
    stickAlign: 'left',
    width: '100px',
  },
  {
    dataKey: 'columnB',
    width: '150px',
  },
  {
    dataKey: 'columnC',
    width: '150px',
  },
  {
    dataKey: 'columnD',
    width: '150px',
  },
  {
    dataKey: 'columnF',
    width: '150px',
  },
  {
    dataKey: 'columnG',
    width: '150px',
  },
  {
    dataKey: 'columnH',
    width: '150px',
  },
  {
    dataKey: 'columnI',
    width: '150px',
  },
  {
    dataKey: 'columnJ',
    stickAlign: 'right',
    width: '100px',
  },
];
const StatefullTable = () => (
  <Table className="table" hScrollOffset={1}>
    <Row
      className="headerRow"
      cellClassName="headerCell"
      columns={columns}
      showScrollArrows={false}
      rowData={{
        columnA: <div>Column A</div>,
        columnB: <div>Column B</div>,
        columnC: <div>Column C</div>,
        columnD: <div>Column D</div>,
        columnF: <div>Column F</div>,
        columnG: <div>Column G</div>,
        columnH: <div>Column H</div>,
        columnI: <div>Column I</div>,
        columnJ: <div>Column J</div>,
      }}
    />
    <Row
      className="row"
      cellClassName="cell"
      columns={columns}
      rowData={{
        columnA: <div>C1 / R1 </div>,
        columnB: <div>C2 / R1 </div>,
        columnC: <div>C3 / R1</div>,
        columnD: <div>C4 / R1</div>,
        columnF: <div>C5 / R1</div>,
        columnG: <div>C6 / R1</div>,
      }}
    />
    <StatefullRow columns={columns} />
    <StatefullRow columns={columns} />
    <StatefullRow columns={columns} />
    <StatefullRow columns={columns} />
    <StatefullRow columns={columns} />
  </Table>
);

export default StatefullTable;

import React from 'react';
import ScrollSyncTable from './index';
import ScrollSyncColumns from '../ScrollSyncColumns';
import ScrollSyncColumn from '../ScrollSyncColumns/ScrollSyncColumn';
import ScrollSyncRows from '../ScrollSyncRows';
import ScrollSyncRow from '../ScrollSyncRows/ScrollSyncRow';
import ScrollSyncCell from '../ScrollSyncCell';
import './index.example.css';

const ScrollSyncTableExample = () => {
  return (
    <ScrollSyncTable
      tableClassName="table"
      rowClassName="row"
      columnClassName="column"
      headerClassName="headerRow"
      headerColumnClassName="headerColumn"
      stickHeader
    >
      <ScrollSyncColumns>
        <ScrollSyncColumn name="a" width="50px" stickyAlign="left">A</ScrollSyncColumn>
        <ScrollSyncColumn name="b" width="150px">B</ScrollSyncColumn>
        <ScrollSyncColumn name="c" width="150px">C</ScrollSyncColumn>
        <ScrollSyncColumn name="d" width="150px">D</ScrollSyncColumn>
        <ScrollSyncColumn name="e" width="150px">E</ScrollSyncColumn>
        <ScrollSyncColumn name="f" width="150px">F</ScrollSyncColumn>
        <ScrollSyncColumn name="g" width="150px">G</ScrollSyncColumn>
        <ScrollSyncColumn name="h" width="150px" stickyAlign="right">H</ScrollSyncColumn>
      </ScrollSyncColumns>
      <ScrollSyncRows>
        <ScrollSyncRow>
          <ScrollSyncCell column="a">A / A</ScrollSyncCell>
          <ScrollSyncCell column="b">A / B</ScrollSyncCell>
          <ScrollSyncCell column="c">A / D</ScrollSyncCell>
          <ScrollSyncCell column="h">A / H</ScrollSyncCell>
        </ScrollSyncRow>
        <ScrollSyncRow>
          <ScrollSyncCell column="a">B / A</ScrollSyncCell>
          <ScrollSyncCell column="b">B / B</ScrollSyncCell>
          <ScrollSyncCell column="c">B / C</ScrollSyncCell>
        </ScrollSyncRow>
        <ScrollSyncRow>
          <ScrollSyncCell column="a">C / A</ScrollSyncCell>
          <ScrollSyncCell column="b">C / B</ScrollSyncCell>
          <ScrollSyncCell column="c">C / C</ScrollSyncCell>
        </ScrollSyncRow>
        <ScrollSyncRow>
          <ScrollSyncCell column="a">D / A</ScrollSyncCell>
          <ScrollSyncCell column="b">D / B</ScrollSyncCell>
          <ScrollSyncCell column="c">D / C</ScrollSyncCell>
        </ScrollSyncRow>
      </ScrollSyncRows>
    </ScrollSyncTable>
  );
};

export default ScrollSyncTableExample;

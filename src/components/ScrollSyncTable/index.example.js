/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ScrollSyncTable from './index';
import ScrollSyncColumns from '../ScrollSyncColumns';
import ScrollSyncColumn from '../ScrollSyncColumns/ScrollSyncColumn';
import ScrollSyncRows from '../ScrollSyncRows';
import ScrollSyncRow from '../ScrollSyncRows/ScrollSyncRow';
import ScrollSyncCell from '../ScrollSyncCell';
import './index.example.css';

const ScrollSyncTableExample = () => (
  <ScrollSyncTable
    columnClassName="column"
    headerRowClassName="headerRow"
    headerColumnClassName="headerColumn"
    tableClassName="table"
    rowClassName="row"
    stickHeader>
    <ScrollSyncColumns>
      <ScrollSyncColumn dataKey="a" width="50px" stickyAlign="left">
        A
      </ScrollSyncColumn>
      <ScrollSyncColumn dataKey="b" width="150px">
        B
      </ScrollSyncColumn>
      <ScrollSyncColumn dataKey="c" width="150px">
        C
      </ScrollSyncColumn>
      <ScrollSyncColumn dataKey="d" width="150px">
        D
      </ScrollSyncColumn>
      <ScrollSyncColumn dataKey="e" width="150px">
        E
      </ScrollSyncColumn>
      <ScrollSyncColumn dataKey="f" width="150px">
        F
      </ScrollSyncColumn>
      <ScrollSyncColumn dataKey="g" width="150px">
        G
      </ScrollSyncColumn>
      <ScrollSyncColumn dataKey="h" width="150px" stickyAlign="right">
        H
      </ScrollSyncColumn>
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

export default ScrollSyncTableExample;

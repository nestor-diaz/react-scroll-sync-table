## ScrollSyncTable
[![Build Status](https://travis-ci.org/sagrath23/react-scroll-sync-table.svg?branch=feature%2Fadd-travis-ci-config)](https://travis-ci.org/sagrath23/react-scroll-sync-table)
### A table to show components in a declarative way with horizontal synced scroll.


The table is a composition of React components where you explicitly set the Columns and the Rows.

```js
<ScrollSyncTable stickHeader>
  <ScrollSyncColumns>
    <ScrollSyncColumn name="a" width="30px">Column A</ScrollSyncColumn>
    <ScrollSyncColumn name="b" width="100px">Column B</ScrollSyncColumn>
  </ScrollSyncColumns>
  <ScrollSyncRows>
    <ScrollSyncRow>
      <ScrollSyncCell column="a">Row A / Column A</ScrollSyncCell>
      <ScrollSyncCell column="b">Row A / Column B</ScrollSyncCell>
    </ScrollSyncRow>
    <ScrollSyncRow>
      <ScrollSyncCell column="a">Row B / Column A</ScrollSyncCell>
      <ScrollSyncCell column="b">Row B / Column B</ScrollSyncCell>
    </ScrollSyncRow>
    <ScrollSyncRow>
      <ScrollSyncCell column="a">Row C / Column A</ScrollSyncCell>
      <ScrollSyncCell column="b">Row C / Column B</ScrollSyncCell>
    </ScrollSyncRow>
    <ScrollSyncRow>
      <ScrollSyncCell column="a">Row D / Column A</ScrollSyncCell>
      <ScrollSyncCell column="b">Row D / Column B</ScrollSyncCell>
    </ScrollSyncRow>
  </ScrollSyncRows>
</ScrollSyncTable>
```

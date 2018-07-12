```js
<ScrollSyncTable stickHeader>
  <ScrollSyncColumns>
    <ScrollSyncColumn name="a" width="30px" stickyAlign="left">Column A</ScrollSyncColumn>
    <ScrollSyncColumn name="b" width="100px">Column B</ScrollSyncColumn>
    <ScrollSyncColumn name="c" width="100px">Column C</ScrollSyncColumn>
  </ScrollSyncColumns>
  <ScrollSyncRows>
    <ScrollSyncRow>
      <ScrollSyncCell column="a">Row A / Column A</ScrollSyncCell>
      <ScrollSyncCell column="b">Row A / Column B</ScrollSyncCell>
      <ScrollSyncCell column="c">Row A / Column D</ScrollSyncCell>
    </ScrollSyncRow>
    <ScrollSyncRow>
      <ScrollSyncCell column="a">Row B / Column A</ScrollSyncCell>
      <ScrollSyncCell column="b">Row B / Column B</ScrollSyncCell>
      <ScrollSyncCell column="c">Row B / Column C</ScrollSyncCell>
    </ScrollSyncRow>
    <ScrollSyncRow>
      <ScrollSyncCell column="a">Row C / Column A</ScrollSyncCell>
      <ScrollSyncCell column="b">Row C / Column B</ScrollSyncCell>
      <ScrollSyncCell column="c">Row C / Column C</ScrollSyncCell>
    </ScrollSyncRow>
    <ScrollSyncRow>
      <ScrollSyncCell column="a">Row D / Column A</ScrollSyncCell>
      <ScrollSyncCell column="b">Row D / Column B</ScrollSyncCell>
      <ScrollSyncCell column="c">Row D / Column C</ScrollSyncCell>
    </ScrollSyncRow>
  </ScrollSyncRows>
</ScrollSyncTable>
```

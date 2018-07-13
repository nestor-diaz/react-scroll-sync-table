```js
<ScrollSyncTable stickHeader>
  <ScrollSyncColumns>
    <ScrollSyncColumn name="a" width="30px" stickyAlign="left">A</ScrollSyncColumn>
    <ScrollSyncColumn name="b" width="150px">Column B</ScrollSyncColumn>
    <ScrollSyncColumn name="c" width="150px">Column C</ScrollSyncColumn>
    <ScrollSyncColumn name="d" width="150px">Column D</ScrollSyncColumn>
    <ScrollSyncColumn name="e" width="150px">Column E</ScrollSyncColumn>
    <ScrollSyncColumn name="f" width="150px">Column F</ScrollSyncColumn>
    <ScrollSyncColumn name="g" width="150px">Column G</ScrollSyncColumn>
    <ScrollSyncColumn name="h" width="150px">Column H</ScrollSyncColumn>
  </ScrollSyncColumns>
  <ScrollSyncRows>
    <ScrollSyncRow>
      <ScrollSyncCell column="a">A / A</ScrollSyncCell>
      <ScrollSyncCell column="b">Row A / Column B</ScrollSyncCell>
      <ScrollSyncCell column="c">Row A / Column D</ScrollSyncCell>
      <ScrollSyncCell column="h">Row A / Column H</ScrollSyncCell>
    </ScrollSyncRow>
    <ScrollSyncRow>
      <ScrollSyncCell column="a">B / A</ScrollSyncCell>
      <ScrollSyncCell column="b">Row B / Column B</ScrollSyncCell>
      <ScrollSyncCell column="c">Row B / Column C</ScrollSyncCell>
    </ScrollSyncRow>
    <ScrollSyncRow>
      <ScrollSyncCell column="a">C / A</ScrollSyncCell>
      <ScrollSyncCell column="b">Row C / Column B</ScrollSyncCell>
      <ScrollSyncCell column="c">Row C / Column C</ScrollSyncCell>
    </ScrollSyncRow>
    <ScrollSyncRow>
      <ScrollSyncCell column="a">D / A</ScrollSyncCell>
      <ScrollSyncCell column="b">Row D / Column B</ScrollSyncCell>
      <ScrollSyncCell column="c">Row D / Column C</ScrollSyncCell>
    </ScrollSyncRow>
  </ScrollSyncRows>
</ScrollSyncTable>
```

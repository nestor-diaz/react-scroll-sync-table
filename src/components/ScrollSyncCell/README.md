This component is aim to be just for a declarative purpose.
It should be used to indicate the column where its children should be rendered.

```js
<ScrollSyncTable stickHeader>
  <ScrollSyncColumns>
    <ScrollSyncColumn name="a" width="100px">Header A</ScrollSyncColumn>
    <ScrollSyncColumn name="b" width="100px">Header B</ScrollSyncColumn>
  </ScrollSyncColumns>
  <ScrollSyncRows>
    <ScrollSyncRow>
      <ScrollSyncCell column="a">Column A</ScrollSyncCell>
      <ScrollSyncCell column="b">Column B</ScrollSyncCell>
    </ScrollSyncRow>
  </ScrollSyncRows>
</ScrollSyncTable>
```

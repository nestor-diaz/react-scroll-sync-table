This component is aim to be just for a declarative purpose.
It should be used to indicate the column where its children should be rendered.

```js
<ScrollSyncTable>
  <ScrollSyncColumns>
    <ScrollSyncColumn name="a">Header A</ScrollSyncColumn>
  </ScrollSyncColumns>
  <ScrollSyncRows>
    <ScrollSyncRow>
      <ScrollSyncCell column="a">Cell for Column A</ScrollSyncCell>
    </ScrollSyncRow>
  </ScrollSyncRows>
</ScrollSyncTable>
```

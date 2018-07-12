import React, { Component } from 'react';
import './App.css';
import ScrollSyncTable from './ScrollSyncTable';
import ScrollSyncColumns from './ScrollSyncTable/ScrollSyncColumns';
import ScrollSyncColumn from './ScrollSyncTable/ScrollSyncColumns/ScrollSyncColumn';
import ScrollSyncRows from './ScrollSyncTable/ScrollSyncRows';
import ScrollSyncRow from './ScrollSyncTable/ScrollSyncRows/ScrollSyncRow';
import ScrollSyncCell from './ScrollSyncTable/ScrollSyncCell';

class App extends Component {
  state = {
    isFullMetricsContainer: false
  };

  toggleFullWidthContainer = () =>
    this.setState({ isFullMetricsContainer: !this.state.isFullMetricsContainer });

  render() {
    const isFullMetricsContainer = this.state.isFullMetricsContainer;
    const containerClass = isFullMetricsContainer ? 'full-metrics-container' : 'metrics-container';

    return (
      <div className={containerClass}>
        <button onClick={this.toggleFullWidthContainer}>Full Metrics Container</button>
        <ScrollSyncTable>
          <ScrollSyncColumns>
            <ScrollSyncColumn name="a" title="" helpLink="" width="30px" stickyAlign="left" />
            <ScrollSyncColumn name="b" title="" helpLink="" width="100px" />
            <ScrollSyncColumn name="c" title="" helpLink="" width="100px" />
            <ScrollSyncColumn name="d" title="" helpLink="" width="30px" stickyAlign="rigth" />
            <ScrollSyncColumn name="e" title="" helpLink="" width="100px" />
            <ScrollSyncColumn name="f" title="" helpLink="" width="100px" />
            <ScrollSyncColumn name="g" title="" helpLink="" width="100px" />
            <ScrollSyncColumn name="h" title="" helpLink="" width="100px" />
            <ScrollSyncColumn name="i" title="" helpLink="" width="100px" />
            <ScrollSyncColumn name="j" title="" helpLink="" width="100px" />
            <ScrollSyncColumn name="k" title="" helpLink="" width="100px" />
            <ScrollSyncColumn name="m" title="" helpLink="" width="100px" />
            <ScrollSyncColumn name="n" title="" helpLink="" width="100px" />
          </ScrollSyncColumns>
          <ScrollSyncRows>
            <ScrollSyncRow isSticky isHeader>
              <ScrollSyncCell column="a">Row A / Column A</ScrollSyncCell>
              <ScrollSyncCell column="b">Row A / Column B</ScrollSyncCell>
              <ScrollSyncCell column="c">Row A / Column C</ScrollSyncCell>
              <ScrollSyncCell column="d">Row A / Column D</ScrollSyncCell>
            </ScrollSyncRow>
            <ScrollSyncRow name="b">
              <ScrollSyncCell column="a">Row B / Column A</ScrollSyncCell>
              <ScrollSyncCell column="b">Row B / Column B</ScrollSyncCell>
              <ScrollSyncCell column="c">Row B / Column C</ScrollSyncCell>
              <ScrollSyncCell column="d">Row B / Column D</ScrollSyncCell>
            </ScrollSyncRow>
            <ScrollSyncRow name="c">
              <ScrollSyncCell column="a">Row C / Column A</ScrollSyncCell>
              <ScrollSyncCell column="b">Row C / Column B</ScrollSyncCell>
              <ScrollSyncCell column="c">Row C / Column C</ScrollSyncCell>
              <ScrollSyncCell column="d">Row C / Column D</ScrollSyncCell>
            </ScrollSyncRow>
            <ScrollSyncRow name="d">
              <ScrollSyncCell column="a">Row D / Column A</ScrollSyncCell>
              <ScrollSyncCell column="b">Row D / Column B</ScrollSyncCell>
              <ScrollSyncCell column="c">Row D / Column C</ScrollSyncCell>
              <ScrollSyncCell column="d">Row D / Column D</ScrollSyncCell>
            </ScrollSyncRow>
          </ScrollSyncRows>
        </ScrollSyncTable>
      </div>
    );
  }
}

export default App;
